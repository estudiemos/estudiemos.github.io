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

async function escuchar() {
    await pronunciar()
    await dormir(500)
    await pronunciar_palabra()
    await dormir(500)
    mostrar_elemento('acertaste')

}

async function pronunciar() {
    let silaba = document.getElementById("texto").textContent.toLowerCase()
    let pronunciacion = silaba in pronunciaciones ? pronunciaciones[silaba] : silaba
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    const voices = speechSynthesis.getVoices();
    utterThis.voice = voices[11];
    console.log(utterThis.voice);
    document.getElementById("voice").textContent = utterThis.voice.lang
    synth.speak(utterThis);
    return new Promise(resolve => {
        utterThis.onend = resolve;
    });
}

async function pronunciar_palabra() {
    let silaba = document.getElementById("texto").textContent.toLowerCase()
    let pronunciacion = silaba in emojis ? emojis[silaba][0] : pronunciaciones[silaba]
    const utterThis = new SpeechSynthesisUtterance(pronunciacion);
    utterThis.pitch = 1;
    utterThis.lang = 'es-ES';
    utterThis.rate = 0.9;
    const voices = speechSynthesis.getVoices();
    utterThis.voice = voices[11];
    console.log(utterThis.voice);
    document.getElementById("voice").textContent = utterThis.voice.lang
    synth.speak(utterThis);
    return new Promise(resolve => {
        utterThis.onend = resolve;
    });
}

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
//consonantes = "bcdfghjklmnñpqrstvwxyz"
//vocales = "aeiou"
pronunciaciones = {};
pronunciaciones['ba'] = "bá"
pronunciaciones['be'] = "bé"
pronunciaciones['bi'] = "bí"
pronunciaciones['ci'] = "cì"
pronunciaciones['cu'] = "cù"
pronunciaciones['chu'] = "chù"
pronunciaciones['ga'] = "gá"
pronunciaciones['ge'] = "gë"
pronunciaciones['go'] = "gò"
pronunciaciones['gu'] = "gú"
pronunciaciones['ha'] = "a"
pronunciaciones['he'] = "e"
pronunciaciones['hi'] = "i"
pronunciaciones['ho'] = "o"
pronunciaciones['hu'] = "u"
pronunciaciones['je'] = "ge"
pronunciaciones['ji'] = "gi"
pronunciaciones['ju'] = "jú"
pronunciaciones['pu'] = "pú"
pronunciaciones['so'] = "sò"
pronunciaciones['to'] = "tò"
pronunciaciones['xa'] = "xà"
pronunciaciones['xe'] = "xè"
pronunciaciones['za'] = "zä"

emojis = {};

silabas = `a e i o u
            ba be bi bo bu
            ca ce ci co cu
            cha che chi cho chu
            da de di do du
            fa fe fi fo fu
            ga ge gi go gu
            gue gui
            ha he hi ho hu
            ja je ji jo ju
            ka ke ki ko ku
            la le li lo lu
            ma me mi mo mu
            na ne ni no nu
            ña ñe ñi ño ñu
            pa pe pi po pu
            que qui
            ra re ri ro ru
            sa se si so su
            ta te ti to tu
            va ve vi vo vu
            xa xe xi xo xu                    
            ya ye yi yo yu
            za zo zu`.replace(/\s{2,}/g, ' ').replace(/\n/g, " ").split(" ")

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