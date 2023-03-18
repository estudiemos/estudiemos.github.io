/*
function pronuncia(silaba) {
    let pronunciacion = silaba in pronunciaciones ? pronunciaciones[silaba] : silaba
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    const voices = speechSynthesis.getVoices();
    utterThis.voice = voices[11];
    console.log(utterThis.voice);
    synth.speak(utterThis);
}
*/

async function escuchar() {
    let texto = document.getElementById("texto").textContent.toLowerCase()
    if (texto in pronunciaciones) {
        await pronunciar(pronunciaciones[texto])
    } else { pronunciar(texto) }
    await dormir(500)
    
    if (texto in emojis) {        
        await pronunciar(emojis[texto][0])
        await dormir(500)
    }
    mostrar_elemento('acertaste')

}

async function pronunciar(pronunciacion) {
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
        console.log(voices[i])
    }
    //utterThis.voice = voices[11];
    utterThis.voice = speechSynthesis.getVoices().find(voice => /Google español/.test(voice.name));
    console.log(utterThis.voice);
    document.getElementById("voice").textContent = utterThis.voice.name
    synth.speak(utterThis);
    return new Promise(resolve => {
        utterThis.onend = resolve;
    });
}
/*
async function pronunciar_palabra() {
    let silaba = document.getElementById("texto").textContent.toLowerCase()
    let pronunciacion = silaba in emojis ? emojis[silaba][0] : pronunciaciones[silaba]
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
        console.log(voices[i])
    }

    //utterThis.voice = voices[11];
    utterThis.voice = speechSynthesis.getVoices().find(voice => /Google español/.test(voice.name));
    console.log(utterThis.voice);
    document.getElementById("voice").textContent = utterThis.voice.name
    synth.speak(utterThis);
    return new Promise(resolve => {
        utterThis.onend = resolve;
    });
}
*/

function dormir(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}
function siguiente_silaba() {
    let siguiente = silabas[Math.floor(Math.random() * silabas.length)];
    document.getElementById("texto").textContent = siguiente.toUpperCase()
}

function ocultar_elemento(identificador) {
    let x = document.getElementById(identificador);
    x.style.display = "none";
}

async function mostrar_elemento(identificador) {
    let x = document.getElementById(identificador);
    x.style.display = "block";
}

const synth = window.speechSynthesis;

function bucle() {
    /*const silabas = []
    for (let i = 0; i < consonantes.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            let silaba = consonantes[i] + vocales[j];
            silabas.push(silaba);
        }
    }*/
    console.log(silabas)
    const shuffled = silabas.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    play(selected)
}

async function play(silabas) {
    for (i = 0; i < silabas.length; i++) {
        await getNextAudio(silabas[i]);
    }

    async function getNextAudio(silaba) {
        let pronunciacion = silaba in pronunciaciones ? pronunciaciones[silaba] : silaba
        console.log(`#${silaba}# #${pronunciacion}#`);
        let audio = new SpeechSynthesisUtterance(pronunciacion);
        audio.pitch = 1;
        audio.lang = 'es-ES';
        audio.rate = 1;
        const voices = speechSynthesis.getVoices();
        audio.voice = voices[11];
        //console.log(audio.voice);
        window.speechSynthesis.speak(audio);
        document.getElementById("texto").textContent = silaba.toUpperCase()

        return new Promise(resolve => {
            audio.onend = resolve;
        });
    }
}

window.addEventListener('load', siguiente_silaba)