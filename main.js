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
// Wybieranie elementów
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')

const changeTextColorBtn = document.querySelector('#changeTextColorBtn')
const changeBackgroundBtn = document.querySelector('#changeBackgroundBtn')
const changeFontWeightBtn = document.querySelector('#changeFontWeightBtn')

// Funkcja do zmiany koloru wszystkich <p>
function changeTextColor(color) {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = color
    })
}

// Funkcja do zmiany tła drugiego akapitu
function changeBackground(color) {
    p2.style.backgroundColor = color
}

// Funkcja do zmiany grubości czcionki trzeciego akapitu
function changeFontWeight(weight) {
    p3.style.fontWeight = weight
}

// Obsługa kliknięć
changeTextColorBtn.addEventListener('click', function () {
    changeTextColor('blue')
    this.style.backgroundColor = '#red'
})

changeBackgroundBtn.addEventListener('click', function () {
    changeBackground('lightgray')
    this.style.backgroundColor = '#green'
})

changeFontWeightBtn.addEventListener('click', function () {
    changeFontWeight('bold')
    this.style.backgroundColor = '#blue'
})
