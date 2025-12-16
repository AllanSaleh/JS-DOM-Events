const output = document.getElementById("output")

// Helper function to display all of our events inside the output div

const displayEvent = (eventType, details) => {
    const timestamp = new Date().toLocaleDateString(); //timestamp
    const eventInfo = document.createElement('div'); //creating a new div
    
    eventInfo.innerHTML = `
    <strong>${timestamp}</strong> - <span>${eventType}: ${details}</span>
    `;
    output.appendChild(eventInfo)
};
// Mouse Event Listeners

// Click Event - fires when a button is clicked
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener('click', (event) => {
    displayEvent('CLICK', `Button clicked! Event Target: ${event.target.tagName}`);
});

// Mouse Over Event - fires when mouse moves over the button
const hoverBtn = document.getElementById("hoverBtn");
hoverBtn.addEventListener("mouseover", (event)=>{
    displayEvent("HOVER", `Cursor hovering over button: ${event.target.tagName}`);
});

// Mouse Out Event - fires when you rmove your mouse from the element
hoverBtn.addEventListener("mouseout", (event)=>{
    displayEvent("MOUSE OUT", `Cursor removed from button: ${event.target.tagName}`);
});

// Keyboard Inputs

// Key Down - Event when you press a key down
const keyboardInput = document.getElementById("keyboardInput");
keyboardInput.addEventListener("keydown", (event) => {
    displayEvent("KEY DOWN", `${event.key}, Code: ${event.code} pressed.`)
});

// Key Up - Even when you release a key (let the key up)
keyboardInput.addEventListener("keyup", (event) => {
    displayEvent("KEY UP", `${event.key}, Code: ${event.code} released.`)
});

// Form Event Listeners

// Focus event - fires when input gains focus
const formInput = document.querySelector("#formInput");
formInput.addEventListener('focus', (event) => {
    displayEvent("FOCUS", "Input field focus!");
})

// Blur event - fires when input loses focus
formInput.addEventListener('blur', (event) => {
    displayEvent("BLUR", "Input field lost focus");
})

// Submit event - fires when form is submitted
const demoForm = document.getElementById('demoForm');

demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    displayEvent('FORM SUBMIT', `Form submitted with value ${formInput.value}`);
    console.log(event.target.formInput.value)
});

// ============== Dynamic Button Creation

const myBtn = document.createElement('button');
myBtn.textContent = 'Clear Output';
myBtn.className = 'button';
myBtn.addEventListener('click', (event) => {
    output.innerHTML = `<p>Event Output will appear here...</p>`;
})

const demoContainer = document.querySelector(".demo-container");
demoContainer.appendChild(myBtn);