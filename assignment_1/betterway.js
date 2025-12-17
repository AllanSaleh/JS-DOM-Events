// getELementsByClassName -> HTML Collection (cannot use array methods)
// querySelectorAll -> Node list (Can use array methods)

const colors = document.querySelectorAll(".color-swatch");
const colorCanvas = document.getElementById("colorCanvas");
const currentColor = document.getElementById("currentColor");
const resetCanvas = document.getElementById("resetCanvas");

console.log(colors)

colors.forEach(color => {
    color.addEventListener('click', () => {
        let colorValue = color.dataset.color
        colorCanvas.style.backgroundColor = colorValue;
        currentColor.textContent = colorValue;
    })
});

resetCanvas.addEventListener("click", () => {
    colorCanvas.style.backgroundColor = 'white';
    currentColor.textContent = 'None';
})