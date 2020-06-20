//Aufgabe 8 mit Tips von Colleen Zeller gelöst

window.addEventListener('load', function () {

    //Drum Pad
    document.querySelector("#button1").addEventListener('click', function () {
        playSample("samples/A.mp3")
    });
    document.querySelector("#button2").addEventListener('click', function () {
        playSample("samples/C.mp3")
    });
    document.querySelector("#button3").addEventListener('click', function () {
        playSample("samples/F.mp3")
    });
    document.querySelector("#button4").addEventListener('click', function () {
        playSample("samples/G.mp3")
    });
    document.querySelector("#button5").addEventListener('click', function () {
        playSample("samples/hihat.mp3")
    });
    document.querySelector("#button6").addEventListener('click', function () {
        playSample("samples/kick.mp3")
    });
    document.querySelector("#button7").addEventListener('click', function () {
        playSample("samples/laugh-1.mp3")
    });
    document.querySelector("#button8").addEventListener('click', function () {
        playSample("samples/laugh-2.mp3")
    });
    document.querySelector("#button9").addEventListener('click', function () {
        playSample("samples/snare.mp3")
    });

    //Drum Machine 
    document.querySelector("#play").addEventListener('click', playstop);
    document.querySelector("#record").addEventListener('click', recording);

    var defbeat: string[] = ["samples/kick.mp3", "samples/snare.mp3", "samples/hihat.mp3"];
    var n: number = 0;
    var interbeat: number;

    function playBeats() {
        interbeat = setInterval(function () {
            playSample(defbeat[n]);
            n++;
            if (n >= defbeat.length) {
                n = 0;
            }
        }, 500);
    }

    //Play Button + Stop Button

    function playstop(): void {
        var psbutton = document.querySelector("#play");
        if (psbutton.getAttribute("class") == "fas fa-play") {
            psbutton.setAttribute("class", "fas fa-stop");
            playBeats();
        } else {
            psbutton.setAttribute("class", "fas fa-play");
            stopBeat();
        }
    }

    function stopBeat() {
        clearInterval(interbeat);
    }

    //Beat aufnehmen

    var rec: boolean = false;
    function recording(): void {
        if (rec) {
            rec = false;
        } else {
            rec = true;
        }
    }

    function playSample(mp3: string): void {
        if (rec) {
            defbeat.push(mp3);
        }
        const sound: HTMLAudioElement = new Audio(mp3);
        sound.play();
    }

    //Beat löschen

    document.getElementById("delete").addEventListener('click', function () {
        defbeat = [];
    });
})


