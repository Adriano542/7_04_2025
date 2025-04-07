const mainTitle = document.querySelector('h1')
const btn = document.querySelector('button')
const changeColorInp = document.querySelector('changeColorInp')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

btn.addEventListener('click', function(){
    console.log(changeColorInp.value)
    changeColor(changeColorInp.value)
    this.style.backgroundColor = '#ff0'
})