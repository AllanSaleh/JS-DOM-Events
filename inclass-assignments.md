# Lesson 5: Events & Interactive Programming - In-Class Assignments

## Assignment 1: Interactive Color Picker
**Time**: 20 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Basic DOM manipulation, event listeners

### Objective
Create an interactive color picker that responds to mouse events and provides real-time visual feedback.

### Requirements
1. Create a color palette with 6 different colored squares
2. Implement a canvas area that changes color when you click on a palette color
3. Add a text display showing the current color name
4. Include a reset button to clear the canvas
5. Add hover effects to the color swatches

### HTML Structure
```html
<div class="color-picker">
    <h3>Interactive Color Picker</h3>
    <div class="palette">
        <div class="color-swatch" data-color="red" style="background-color: red;"></div>
        <div class="color-swatch" data-color="blue" style="background-color: blue;"></div>
        <div class="color-swatch" data-color="green" style="background-color: green;"></div>
        <div class="color-swatch" data-color="yellow" style="background-color: yellow;"></div>
        <div class="color-swatch" data-color="purple" style="background-color: purple;"></div>
        <div class="color-swatch" data-color="orange" style="background-color: orange;"></div>
    </div>
    <div class="canvas" id="colorCanvas"></div>
    <p>Current Color: <span id="currentColor">None</span></p>
    <button id="resetCanvas" class="button">Reset Canvas</button>
</div>
```

### CSS Styling
```css
.color-picker {
    margin: 20px 0;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 10px;
}

.palette {
    display: flex;
    gap: 10px;
    margin: 10px 0;
}

.color-swatch {
    width: 50px;
    height: 50px;
    border: 2px solid #333;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.2s;
}

.color-swatch:hover {
    transform: scale(1.1);
}

.canvas {
    width: 200px;
    height: 100px;
    border: 2px solid #333;
    margin: 10px 0;
    background-color: white;
    border-radius: 5px;
}
```

### JavaScript Requirements
- Add click event listeners to each color swatch
- Update the canvas background color when a swatch is clicked
- Update the current color display text
- Implement the reset functionality
- Add hover effects (optional enhancement)

### Success Criteria
- [ ] All color swatches respond to clicks
- [ ] Canvas changes color when swatches are clicked
- [ ] Current color text updates correctly
- [ ] Reset button clears the canvas
- [ ] Code is well-commented and organized

### Extension Challenge
Add a "Random Color" button that generates a random color and applies it to the canvas.

---

## Assignment 2: Dynamic Task List with Event Delegation
**Time**: 25 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Event delegation, DOM manipulation, forms

### Objective
Build a task management system using event delegation to handle dynamically added content.

### Requirements
1. Create a form to add new tasks
2. Display tasks in a list with remove buttons
3. Use event delegation to handle task removal
4. Toggle task completion status when clicked
5. Show different visual states for completed/incomplete tasks
6. Display task statistics (total, completed, remaining)

### HTML Structure
```html
<div class="task-manager">
    <h3>Dynamic Task Manager</h3>
    <form id="taskForm">
        <input type="text" id="taskInput" placeholder="Enter new task..." required>
        <button type="submit" class="button">Add Task</button>
    </form>
    <ul id="taskList" class="task-list">
        <!-- Tasks will be added dynamically -->
    </ul>
    <div id="taskStats">
        <p>Total: <span id="totalTasks">0</span> | 
           Completed: <span id="completedTasks">0</span> | 
           Remaining: <span id="remainingTasks">0</span></p>
    </div>
</div>
```

### CSS Styling
```css
.task-manager {
    margin: 20px 0;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 10px;
}

.task-list {
    list-style: none;
    padding: 0;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.task-item:hover {
    background-color: #e9ecef;
}

.task-item.completed {
    text-decoration: line-through;
    background-color: #d4edda;
    border-color: #c3e6cb;
}

.task-text {
    flex-grow: 1;
    margin-right: 10px;
}

.remove-btn {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

.remove-btn:hover {
    background-color: #c82333;
}

#taskStats {
    margin-top: 15px;
    padding: 10px;
    background-color: #e9ecef;
    border-radius: 5px;
}
```

### JavaScript Requirements
- Handle form submission to add new tasks
- Use event delegation on the task list for:
  - Removing tasks when remove button is clicked
  - Toggling completion status when task is clicked
- Update statistics after each operation
- Prevent form submission if input is empty
- Clear input after adding a task

### Key Concepts to Implement
1. **Event Delegation**: Attach one event listener to the parent `<ul>` element
2. **Event Target Checking**: Use `event.target` to determine what was clicked
3. **DOM Manipulation**: Create and remove elements dynamically
4. **Form Handling**: Prevent default submission and validate input

### Success Criteria
- [ ] New tasks can be added via form
- [ ] Tasks can be removed using event delegation
- [ ] Task completion status toggles on click
- [ ] Visual feedback shows completed vs incomplete tasks
- [ ] Statistics update correctly
- [ ] Form validation prevents empty submissions
- [ ] Code uses event delegation properly

### Extension Challenges
1. Add keyboard shortcuts (Enter to add task, Escape to clear input)
2. Implement task editing (double-click to edit)
3. Add task filtering (show all, completed, or remaining)
4. Add local storage to persist tasks

---