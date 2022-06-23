const grid = []
const container = document.querySelector('#container')
for (let i = 0 ; i < 256 ; i++){
   grid[i] = document.createElement('div')
   container.appendChild(grid[i])
}

 grid.forEach(div => div.addEventListener('mouseenter'  , (e) =>{
    e.target.classList.add('box')   
   }))