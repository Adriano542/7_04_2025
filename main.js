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
const colorButton = document.createElement("button");
colorButton.textContent = "Zmień kolor tekstu";
colorButton.onclick = () => {
    document.querySelectorAll("p").forEach(p => {
        p.style.color = "blue";
    });
};
document.body.appendChild(colorButton);

// Tworzenie przycisku do zmiany tła drugiego elementu
const backgroundButton = document.createElement("button");
backgroundButton.textContent = "Zmień tło drugiego akapitu";
backgroundButton.onclick = () => {
    const secondP = document.getElementById("p2");
    secondP.style.backgroundColor = "lightgray";
};
document.body.appendChild(backgroundButton);

// Tworzenie przycisku do zmiany grubości czcionki trzeciego elementu
const fontWeightButton = document.createElement("button");
fontWeightButton.textContent = "Zmień grubość czcionki trzeciego akapitu";
fontWeightButton.onclick = () => {
    const thirdP = document.getElementById("p3");
    thirdP.style.fontWeight = "bold";
};
document.body.appendChild(fontWeightButton);
