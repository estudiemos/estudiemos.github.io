async function escuchar() {
    let texto = document.getElementById("texto").textContent.toLowerCase()
    if (texto in pronunciaciones) {
        await pronunciar(pronunciaciones[texto])
    } else { pronunciar(texto) }
    await dormir(700)

    if (texto in emojis) {
        await pronunciar(emojis[texto][0])
        await dormir(700)
    }
    mostrar_elemento('acertaste')

}

function pronunciar(pronunciacion) {
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    voices = speechSynthesis.getVoices()
    /*for (let i = 0; i < voices.length; i++) {
        console.log(voices[i])
    }*/
    //console.log("voices.length " + voices.length)
    let selectedVoice = voices.find(voice => /(Google español|español España)/.test(voice.name));
    if (selectedVoice == null) {
        selectedVoice = voices.find(voice => /es(-|_)ES/.test(voice.lang));
    }
    utterThis.voice = selectedVoice
    //console.log(utterThis.voice);
    
    if (typeof selectedVoice == "object") {      
        document.getElementById("voice").textContent = "Voz: " + utterThis.voice.name
    }

    speechSynthesis.speak(utterThis);

    return new Promise(resolve => {
        utterThis.onend = resolve;
    });
}

function toggleMayMin() {
    if (maymin === "AA") {
        maymin = "Aa"
    } else if (maymin === "Aa") {
        maymin = "aa"
    } else {
        maymin = "AA"
    }
    actualizarTexto(document.getElementById("texto").textContent)
}

function texto2maymin(texto) {
    let nuevoTexto = ""
    if (maymin === "AA") {
        nuevoTexto = texto.toUpperCase();

    } else if (maymin === "Aa") {
        nuevoTexto = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    } else {
        nuevoTexto = texto.toLowerCase();
    }
    return nuevoTexto;
}

function actualizarTexto(texto) {
    let nuevoTexto = ""
    nuevoTexto = texto2maymin(texto)
    document.getElementById("texto").textContent = nuevoTexto;
}

function dormir(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}
function siguiente_texto() {
    let siguiente = silabas[Math.floor(Math.random() * silabas.length)];
    actualizarTexto(siguiente)
}

function ocultar_elemento(identificador) {
    let x = document.getElementById(identificador);
    x.style.display = "none";
}

function mostrar_elemento(identificador) {
    let x = document.getElementById(identificador);
    x.style.display = "block";
}

selectedVoice = ""
voices = ""
maymin = "AA"

window.addEventListener('load', () => {
    siguiente_texto();
})

/*window.speechSynthesis.onvoiceschanged = () => {
    console.log("voiceschanged event.");
    voices = speechSynthesis.getVoices();
    seleccionarVoz();
    siguiente_texto();
}*/

/*speechSynthesis.addEventListener("voiceschanged", () => {
    console.log("voiceschanged event.");
    voices = speechSynthesis.getVoices();
    seleccionarVoz();
    siguiente_texto();
})*/