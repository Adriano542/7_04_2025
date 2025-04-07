const mainTitle = document.querySelector('h1')
const btn = document.querySelector('button')
const changeColorInp = document.querySelector('changeColorInp')
const textInput = document.querySelector('#textInput')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

btn.addEventListener('click', function(){
    changeColor(changeColorInp.value)
    this.style.backgroundColor = '#ff0'

    
})