//Aufgabe 7.1
function playSample(mp3) {
    var allSamples = new Audio("samples/" + mp3);
    allSamples.play();
}
window.addEventListener('load', function () {
    document.querySelector("#button1").addEventListener('click', function () {
        playSample('A.mp3');
    });
    document.querySelector("#button2").addEventListener('click', function () {
        playSample('C.mp3');
    });
    document.querySelector("#button3").addEventListener('click', function () {
        playSample('F.mp3');
    });
    document.querySelector("#button4").addEventListener('click', function () {
        playSample('G.mp3');
    });
    document.querySelector("#button5").addEventListener('click', function () {
        playSample('hihat.mp3');
    });
    document.querySelector("#button6").addEventListener('click', function () {
        playSample('kick.mp3');
    });
    document.querySelector("#button7").addEventListener('click', function () {
        playSample('laugh-1.mp3');
    });
    document.querySelector("#button8").addEventListener('click', function () {
        playSample('laugh-2.mp3');
    });
    document.querySelector("#button9").addEventListener('click', function () {
        playSample('snare.mp3');
    });
});
//Aufgabe 7.2
var defbeat = ["samples/kick.mp3", "samples/snare.mp3", "samples/hihat.mp3"];
var n = 1;
function playButton(x) {
    var sound = new Audio(defbeat[x]);
    sound.play();
}
window.addEventListener('load', function () {
    document.querySelector("#playbutton").addEventListener('click', function () {
        setInterval(function () {
            playButton(n - 1);
            n = n;
            n = n + 1;
        }, 500);
    });
});
//# sourceMappingURL=script.js.map