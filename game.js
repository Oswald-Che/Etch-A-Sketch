const grid = []
const container = document.querySelector('#container')
const button = document.querySelector('#button')
button.addEventListener("click" , () => {
    let num = parseInt(prompt("Enter the amount grids \n Max amount = 100"))
    if (num > 100){
        alert("ERROR number greater than 100")
        return
    }
    container.innerHTML = ''
    container.style.cssText = `grid-template-columns:repeat(${num} , 1fr)`
    let num2 = num ** 2
    sketch(num2)
    }

) 
function sketch(n=625){
for (let i = 0 ; i < n ; i++){
   grid[i] = document.createElement('div')
   container.appendChild(grid[i])
}

 grid.forEach(div => div.addEventListener('mouseenter'  , (e) =>{
    e.target.classList.add('box')   
   }))
}
sketch()
