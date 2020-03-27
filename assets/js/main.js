let RandomColor1;
let RandomColor2;
let RandomColor3;
let RandomColor4;
let RandomColor5;
let RandomColor6;
let RandomColor7;
let RandomColor8;
let RandomColor9;
let RandomColor10;
let RandomColor11;
let RandomColor12;
let RandomColor13;
let RandomColor14;
let RandomColor15;

// --------------------------------------- Farbe 1 ---------------------------------------
function ColorOutput1() {
    RandomColor1 = Math.floor(Math.random() * 256);
    RandomColor2 = Math.floor(Math.random() * 256);
    RandomColor3 = Math.floor(Math.random() * 256);
    let ColorOutput1 = `rgb(${RandomColor1}, ${RandomColor2}, ${RandomColor3})`;
    // document.getElementById("Output1").style.backgroundColor = ColorOutput1;
    return ColorOutput1;
}
// --------------------------------------- Farbe 1 ---------------------------------------
// --------------------------------------- Farbe 2 ---------------------------------------
function ColorOutput2() {
    RandomColor4 = Math.floor(Math.random() * 256);
    RandomColor5 = Math.floor(Math.random() * 256);
    RandomColor6 = Math.floor(Math.random() * 256);
    let ColorOutput2 = `rgb(${RandomColor4}, ${RandomColor5}, ${RandomColor6})`;
    // document.getElementById("Output2").style.backgroundColor = ColorOutput2;
    return ColorOutput2;
}
// --------------------------------------- Farbe 2 ---------------------------------------
// --------------------------------------- Farbe 3 ---------------------------------------
function ColorOutput3() {
    RandomColor7 = Math.floor(Math.random() * 256);
    RandomColor8 = Math.floor(Math.random() * 256);
    RandomColor9 = Math.floor(Math.random() * 256);
    let ColorOutput3 = `rgb(${RandomColor7}, ${RandomColor8}, ${RandomColor9})`;
    // document.getElementById("Output3").style.backgroundColor = ColorOutput3;
    return ColorOutput3;
}
// --------------------------------------- Farbe 3 ---------------------------------------
// --------------------------------------- Farbe 4 ---------------------------------------
function ColorOutput4() {
    RandomColor10 = Math.floor(Math.random() * 256);
    RandomColor11 = Math.floor(Math.random() * 256);
    RandomColor12 = Math.floor(Math.random() * 256);
    let ColorOutput4 = `rgb(${RandomColor10}, ${RandomColor11}, ${RandomColor12})`;
    // document.getElementById("Output4").style.backgroundColor = ColorOutput4;
    return ColorOutput4;
}
// --------------------------------------- Farbe 4 ---------------------------------------
// --------------------------------------- Farbe 5 ---------------------------------------
function ColorOutput5() {
    RandomColor13 = Math.floor(Math.random() * 256);
    RandomColor14 = Math.floor(Math.random() * 256);
    RandomColor15 = Math.floor(Math.random() * 256);
    let ColorOutput5 = `rgb(${RandomColor13}, ${RandomColor14}, ${RandomColor15})`;
    // document.getElementById("Output5").style.backgroundColor = ColorOutput5;
    return ColorOutput5;
}
// --------------------------------------- Farbe 5 ---------------------------------------
// --------------------------------------- RELOAD ---------------------------------------
document.getElementById("RestartButon").addEventListener("click", () => {
    location.reload()
})
// --------------------------------------- RELOAD ---------------------------------------
// --------------------------------------- Festlegung der Outputfarben ----------------------------------
let ColorRandom1 = ColorOutput1()
let ColorRandom2 = ColorOutput2()
let ColorRandom3 = ColorOutput3()
let ColorRandom4 = ColorOutput4()
let ColorRandom5 = ColorOutput5()
document.getElementById("Output1").style.backgroundColor = ColorRandom1;
document.getElementById("Output2").style.backgroundColor = ColorRandom2;
document.getElementById("Output3").style.backgroundColor = ColorRandom3;
document.getElementById("Output4").style.backgroundColor = ColorRandom4;
document.getElementById("Output5").style.backgroundColor = ColorRandom5;
// --------------------------------------- Festlegung der Outputfarben ----------------------------------
// ---------------------------- Auswahl einer Zufallsfarbe aus den Outputfarben --------------------------
let WelcheFarbe;

let Zufallszahl = Math.floor(Math.random() * 5 + 1)
if (Zufallszahl == 1) {
    WelcheFarbe = ColorRandom1
} else if (Zufallszahl == 2) {
    WelcheFarbe = ColorRandom2
} else if (Zufallszahl == 3) {
    WelcheFarbe = ColorRandom3
} else if (Zufallszahl == 4) {
    WelcheFarbe = ColorRandom4
} else if (Zufallszahl == 5) {
    WelcheFarbe = ColorRandom5
}
document.getElementById("OutputColor").innerHTML = WelcheFarbe
// ---------------------------- Auswahl einer Zufallsfarbe aus den Outputfarben --------------------------
// ---------------------------- Überprüfung gewählte Farbe reale Farbe --------------------------
// console.log(WelcheFarbe)
// console.log(Zufallszahl)
ZufallsausgabeFarbe()

function ZufallsausgabeFarbe() {
    document.getElementById("Output1").addEventListener("click", () => {
        if (Zufallszahl == 1) {
            document.getElementById("OutputRightWrong").innerHTML = "Das Stimmt, Super!"
        } else {
            document.getElementById("OutputRightWrong").innerHTML = "Leider nein. Bitte nochmals versuchen!"
        }
    })
    document.getElementById("Output2").addEventListener("click", () => {
        if (Zufallszahl == 2) {
            document.getElementById("OutputRightWrong").innerHTML = "Das Stimmt, Super!"
        } else {
            document.getElementById("OutputRightWrong").innerHTML = "Leider nein. Bitte nochmals versuchen!"
        }
    })
    document.getElementById("Output3").addEventListener("click", () => {
        if (Zufallszahl == 3) {
            document.getElementById("OutputRightWrong").innerHTML = "Das Stimmt, Super!"
        } else {
            document.getElementById("OutputRightWrong").innerHTML = "Leider nein. Bitte nochmals versuchen!"
        }
    })
    document.getElementById("Output4").addEventListener("click", () => {
        if (Zufallszahl == 4) {
            document.getElementById("OutputRightWrong").innerHTML = "Das Stimmt, Super!"
        } else {
            document.getElementById("OutputRightWrong").innerHTML = "Leider nein. Bitte nochmals versuchen!"
        }
    })
    document.getElementById("Output5").addEventListener("click", () => {
        if (Zufallszahl == 5) {
            document.getElementById("OutputRightWrong").innerHTML = "Das Stimmt, Super!"
        } else {
            document.getElementById("OutputRightWrong").innerHTML = "Leider nein. Bitte nochmals versuchen!"
        }
    })
}


// ---------------------------- Überprüfung gewählte Farbe reale Farbe --------------------------


