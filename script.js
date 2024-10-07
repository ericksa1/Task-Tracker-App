// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks


let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable").querySelector('tbody');

function handleSubmission(event) {
    event.preventDefault(); 

    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }

    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });
    
    render();
}

function render() {
    taskTable.innerHTML = tasks.map((task, index) => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td>
                <button onclick="markTaskComplete(${index})">Complete</button>
                <button onclick="removeTask(${index})">Remove</button>
            </td>
        </tr>
    `).join('');
}

function init() {
    taskTable.innerHTML = ''; 
    tasks = [];
    render(); 
}

taskForm.addEventListener('submit', handleSubmission);

init();

function markTaskComplete(index) {
    alert(`Task "${tasks[index].name}" completed!`);
}

function removeTask(index) {
    tasks.splice(index, 1); 
    render(); 
}
