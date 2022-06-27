let color = []
const grid = []
const container = document.querySelector('#container')
const gridChange = document.querySelector('#grid-change')
// button to change grid size
gridChange.addEventListener("click" , () => {
    let num = parseInt(prompt("Enter the amount grids \n Max amount = 100"))
    if (num > 100){
        alert("ERROR number greater than 100")
        return
    }
    container.innerHTML = ''
    color = []
    container.style.cssText = `grid-template-columns:repeat(${num} , 1fr)`
    let num2 = num ** 2
    sketch(num2)
    }
) 
//button to reset color
const reset = document.querySelector('#reset')
reset.addEventListener('click' , () => {
    const divs  = document.querySelectorAll('#container div')
    divs.forEach(div => {
        div.style.cssText = "background-color : white"
        color = []
    })
})
// function to sketch the boxes
function sketch(n=625){
for (let i = 0 ; i < n ; i++){
   grid[i] = document.createElement('div')
   grid[i].classList.add(`${i}`)
   container.appendChild(grid[i])
}
 
 grid.forEach(div => div.addEventListener('mouseenter'  , (e) =>{
    let num = Number(e.target.classList.value)
    if (color[num] == undefined){
        color[num] = randColor()
    }
    else{
        color[num] = shadeColor(color[num] , 10)
        }
     e.target.style.cssText = `background-color:${color[num]};` 
   }) )
}
//function for Random color generator
function randColor(){
    let maxVal = 0xFFFFFF
    let randomNumber = Math.floor(Math.random() * maxVal).toString(16)
    let color = randomNumber.padStart(6 , 0)
    return `#${color.toUpperCase()}`
}
// function for color decrease
function shadeColor(color, percent) {
    var num = parseInt(color.slice(1),16),
        amt = Math.round(2.55 * percent),
          R = (num >> 16) - amt,
          G = (num >> 8 & 0x00FF) - amt,
          B = (num & 0x0000FF) - amt;
    return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1).toUpperCase();
}
sketch()
