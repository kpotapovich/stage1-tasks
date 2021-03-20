const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
//
// piano.addEventListener('click', (event) => playAudio(event));
// pianoКeys.addEventListener('keydown', (event) => playAudio(event));
//
// window.addEventListener('keydown', (event) => {
//     if(event.code === 'Space') {
//         playAudio();
//     }
// });

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
    console.log(event.code)

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



window.addEventListener('keydown', (event) => {
    console.log(event.code)
    switch (event.code) {
        case 'KeyD':
            playAudio(url_c);
            break;
        case 'KeyF':
            playAudio(url_d);
            break;
        case 'KeyG':
            playAudio(url_e);
            break;
        case 'KeyH':
            playAudio(url_f);
            break;
        case 'KeyJ':
            playAudio(url_g);
            break;
        case 'KeyK':
            playAudio(url_a);
            break;
        case 'KeyL':
            playAudio(url_b);
            break;
    }
});


piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        pianoКeys.forEach((el) => {
            if(el.classList.contains('active')) {
                el.classList.remove('active');
            }
        });
        event.target.classList.add('active');
    }
});

















