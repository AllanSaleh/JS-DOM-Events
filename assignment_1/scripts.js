const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');
const yellowBtn = document.getElementById('yellow');
const purpleBtn = document.getElementById('purple');
const orangeBtn = document.getElementById('orange');
const colorCanvas = document.getElementById('colorCanvas');
const currentColor = document.getElementById('currentColor');
const resetBtn = document.getElementById('resetCanvas');

redBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'red';
    currentColor.textContent = 'red';
})

blueBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'blue';
    currentColor.textContent = 'blue';
})

greenBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'green';
    currentColor.textContent = 'green';
})

yellowBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'yellow';
    currentColor.textContent = 'yellow';
})

purpleBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'purple';
    currentColor.textContent = 'purple';
})

orangeBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'orange';
    currentColor.textContent = 'orange';
})

resetBtn.addEventListener("click", ()=>{
    colorCanvas.style.backgroundColor = 'white';
    currentColor.textContent = 'None';
})