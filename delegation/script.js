const addItem = document.getElementById("addItem");
const itemList = document.querySelector("#itemList");
const delegationOutput = document.getElementById("delegationOutput");

// Helper funtion to log all delegation events

const logDelegation = message => {
    const timestamp = new Date().toLocaleDateString(); //timestamp
    const eventInfo = document.createElement('div'); //creating a new div
    
    eventInfo.innerHTML = `
    <strong>${timestamp}</strong> - ${message}
    `;
    delegationOutput.appendChild(eventInfo)
}

itemList.addEventListener('click', (event) => {
    // console.log(event.target)
    // Check if the clicked element is a remove button
    if (event.target.classList.contains('remove-btn')){ //checking the class list for the remove-btn class
        const listItem = event.target.parentElement; //grabbing the li that the button lives in
        console.log("parent element",listItem)
        listItem.remove();
        
        // Item 1 Remove
        const listText = listItem.innerText.split(" ")[1];
        logDelegation(`Removed item ${listText} using delegation`);
    } else if (event.target.tagName == 'LI'){
        event.target.style.color = 'red';
    }
})

let itemCounter = 3

addItem.addEventListener('click', ()=>{
    itemCounter++;
    const newItem = document.createElement('li');
    newItem.innerHTML = `item ${itemCounter} <button class="remove-btn">Remove</button>`
    itemList.appendChild(newItem);
    logDelegation(`Added Item ${itemCounter}`)
})