async function escuchar() {
    let texto = document.getElementById("texto").textContent.toLowerCase()
    if (texto in pronunciaciones) {
        await pronunciar(pronunciaciones[texto])
    } else { pronunciar(texto) }
    await dormir(900)

    if (texto in emojis) {
        await pronunciar(emojis[texto][0])
        await dormir(900)
    }
    mostrar_elemento('acertaste')

}

function pronunciar(pronunciacion) {
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    voices = speechSynthesis.getVoices()
    for (let i = 0; i < voices.length; i++) {
        console.log(voices[i])
    }
    console.log(selectedVoice);
    utterThis.voice = selectedVoice;
    //console.log(utterThis.voice);
    document.getElementById("voice").textContent = utterThis.voice.name
    speechSynthesis.speak(utterThis);
    return new Promise(resolve => {
        utterThis.onend = resolve;
    });
}

function toggleMayMin() {
    texto = document.getElementById("texto").textContent
    let nuevoTexto = ""
    if (texto == texto.toUpperCase()) {
        nuevoTexto = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    } else if ((texto == texto.toLowerCase())) {
        nuevoTexto = texto.toUpperCase();
    } else {
        nuevoTexto = texto.toLowerCase()
    }
    document.getElementById("texto").textContent = nuevoTexto;
}

function dormir(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}
function siguiente_texto() {
    let siguiente = silabas[Math.floor(Math.random() * silabas.length)];
    document.getElementById("texto").textContent = siguiente.toUpperCase()
}

function ocultar_elemento(identificador) {
    let x = document.getElementById(identificador);
    x.style.display = "none";
}

function mostrar_elemento(identificador) {
    let x = document.getElementById(identificador);
    x.style.display = "block";
}

function seleccionarVoz() {
    if (typeof selectedVoice != "object") {
        console.log("voices.length " + voices.length)
        selectedVoice = voices.find(voice => /(Google español|español España)/.test(voice.name));
        if (selectedVoice == null) {
            selectedVoice = voices.find(voice => /es(-|_)ES/.test(voice.lang));
        }
    }
}

selectedVoice = ""
voices = ""
//window.addEventListener('load', inicio)

window.speechSynthesis.onvoiceschanged = () => {
    console.log("voiceschanged event.");
    voices = speechSynthesis.getVoices();
    seleccionarVoz();
    siguiente_texto();
}

/*speechSynthesis.addEventListener("voiceschanged", () => {
    console.log("voiceschanged event.");
    voices = speechSynthesis.getVoices();
    seleccionarVoz();
    siguiente_texto();
})*/