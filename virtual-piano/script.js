
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}
const key_a = document.getElementById("key_a");
const url_a = 'assets/audio/a.mp3';
key_a.addEventListener('click', () => playAudio(url_a))
window.addEventListener('keydown', (event) => {


});

const key_c = document.getElementById("key_c");
const url_c = 'assets/audio/c.mp3';
key_c.addEventListener('click', () => playAudio(url_c))

const key_d = document.getElementById("key_d");
const url_d = 'assets/audio/d.mp3';
key_d.addEventListener('click', () => playAudio(url_d))

const key_e = document.getElementById("key_e");
const url_e = 'assets/audio/e.mp3';
key_e.addEventListener('click', () => playAudio(url_e))

const key_f = document.getElementById("key_f");
const url_f = 'assets/audio/f.mp3';
key_f.addEventListener('click', () => playAudio(url_f))

const key_g = document.getElementById("key_g");
const url_g = 'assets/audio/g.mp3';
key_g.addEventListener('click', () => playAudio(url_g))

const key_b = document.getElementById("key_b");
const url_b = 'assets/audio/b.mp3';
key_b.addEventListener('click', () => playAudio(url_b))







const key_r = document.getElementById("key_r");
const url_r = 'assets/audio/c♯.mp3';
key_r.addEventListener('click', () => playAudio(url_r));

const key_t = document.getElementById("key_t");
const url_t = 'assets/audio/d♯.mp3';
key_t.addEventListener('click', () => playAudio(url_t));

const key_u = document.getElementById("key_u");
const url_u = 'assets/audio/f♯.mp3';
key_u.addEventListener('click', () => playAudio(url_u));

const key_i = document.getElementById("key_i");
const url_i = 'assets/audio/g♯.mp3';
key_i.addEventListener('click', () => playAudio(url_i));

const key_o = document.getElementById("key_o");
const url_o = 'assets/audio/a♯.mp3';
key_o.addEventListener('click', () => playAudio(url_o));



window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyD':
            playAudio(url_c);
            key_c.classList.add('piano-key-active');
            break;
        case 'KeyF':
            playAudio(url_d);
            key_d.classList.add('piano-key-active');
            break;
        case 'KeyG':
            playAudio(url_e);
            key_e.classList.add('piano-key-active');
            break;
        case 'KeyH':
            playAudio(url_f);
            key_f.classList.add('piano-key-active');
            break;
        case 'KeyJ':
            playAudio(url_g);
            key_g.classList.add('piano-key-active');
            break;
        case 'KeyK':
            playAudio(url_a);
            key_a.classList.add('piano-key-active');
            break;
        case 'KeyL':
            playAudio(url_b);
            key_b.classList.add('piano-key-active');
            break;
        case 'KeyR':
            playAudio(url_r);
            key_r.classList.add('piano-key-active');
            break;
        case 'KeyT':
            playAudio(url_t);
            key_t.classList.add('piano-key-active');
            break;
        case 'KeyU':
            playAudio(url_u);
            key_u.classList.add('piano-key-active');
            break;
        case 'KeyI':
            playAudio(url_i);
            key_i.classList.add('piano-key-active');
            break;
        case 'KeyO':
            playAudio(url_o);
            key_o.classList.add('piano-key-active');
            break;
    }
});


window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyD':
            key_c.classList.remove('piano-key-active');
            break;
        case 'KeyF':
            key_d.classList.remove('piano-key-active');
            break;
        case 'KeyG':
            key_e.classList.remove('piano-key-active');
            break;
        case 'KeyH':
            key_f.classList.remove('piano-key-active');
            break;
        case 'KeyJ':
            key_g.classList.remove('piano-key-active');
            break;
        case 'KeyK':
            key_a.classList.remove('piano-key-active');
            break;
        case 'KeyL':
            key_b.classList.remove('piano-key-active');
            break;
        case 'KeyR':
            key_r.classList.remove('piano-key-active');
            break;
        case 'KeyT':
            key_t.classList.remove('piano-key-active');
            break;
        case 'KeyU':
            key_u.classList.remove('piano-key-active');
            break;
        case 'KeyI':
            key_i.classList.remove('piano-key-active');
            break;
        case 'KeyO':
            key_o.classList.remove('piano-key-active');
            break;
    }
});















