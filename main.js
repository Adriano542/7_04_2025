const mainTitle = document.querySelector('h1')
const btn = document.querySelector('button')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

btn.addEventListener('click', function(){
    changeColor('red')
    this.style.backgroundColor = '#ff0'
})