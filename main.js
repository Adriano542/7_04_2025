/*const mainTitle = document.querySelector('h1')
const btn = document.querySelector('button')
const changeColorInp = document.querySelector('#changeColorInp')
const textInput = document.querySelector('#textInput')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

btn.addEventListener('click', function(){
    changeColor(changeColorInp.value)
    this.style.backgroundColor = '#ff0'


})*/
// Tworzenie przycisku do zmiany koloru tekstu we wszystkich <p>
document.getElementById("colorBtn").onclick = () => {
    document.querySelectorAll("p").forEach(p => {
        p.style.color = "blue";
    });
};

// Zmiana tła drugiego akapitu
document.getElementById("backgroundBtn").onclick = () => {
    document.getElementById("p2").style.backgroundColor = "lightgray";
};

// Zmiana grubości czcionki trzeciego akapitu
document.getElementById("fontWeightBtn").onclick = () => {
    document.getElementById("p3").style.fontWeight = "bold";
};