let RandomColorToGuess1;
let RandomColorToGuess2;
let RandomColorToGuess3;
let RandomColor4 = Math.floor(Math.random() * 256)
let RandomColor5 = Math.floor(Math.random() * 256)
let RandomColor6 = Math.floor(Math.random() * 256)
let RandomColor7 = Math.floor(Math.random() * 256)
let RandomColor8 = Math.floor(Math.random() * 256)
let RandomColor9 = Math.floor(Math.random() * 256)



// --------------------------------------- Farbe 1 ---------------------------------------
function ColorOutput1() {
    RandomColorToGuess1 = Math.floor(Math.random() * 256);
    RandomColorToGuess2 = Math.floor(Math.random() * 256);
    RandomColorToGuess3 = Math.floor(Math.random() * 256);
    let ColorOutput1 = `rgb(${RandomColorToGuess1}, ${RandomColorToGuess2}, ${RandomColorToGuess3})`;
    document.getElementById("Output1").style.backgroundColor = ColorOutput1;
    return ColorOutput1;
}

ColorOutput1()
// --------------------------------------- Farbe 1 ---------------------------------------
// --------------------------------------- Farbe 2 ---------------------------------------



// --------------------------------------- Farbe 2 ---------------------------------------
