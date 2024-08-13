
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', function() {
    const date = document.getElementById('task-date').value;
    const taskName = document.getElementById('task-input').value;

    if (date && taskName) {
        const todo = `Date: ${date} Task: ${taskName}`;
        
        // Create a div for the task row
        const taskRow = document.createElement('div');
        taskRow.textContent = todo;

        // Create the Done button
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';

        // Append the Done button to the task row
        taskRow.appendChild(doneBtn);

        // Append the task row to the task column
        document.getElementById('task-column').appendChild(taskRow);

        // Add event listener for the Done button
        doneBtn.addEventListener('click', function() {
            moveToDone(taskRow);
        });

        // Clear the input fields after adding the task
        document.getElementById('task-date').value = '';
        document.getElementById('task-input').value = '';
    }
});

function moveToDone(taskRow) {
    // Remove the Done button
    const doneBtn = taskRow.querySelector('button');
    taskRow.removeChild(doneBtn);

    // Create the Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskRow.remove();
    });

    // Create the Redo button
    const redoBtn = document.createElement('button');
    redoBtn.textContent = 'Redo';
    redoBtn.addEventListener('click', function() {
        moveToTasks(taskRow, deleteBtn, redoBtn);
    });

    // Append Delete and Redo buttons to the task row
    taskRow.appendChild(deleteBtn);
    taskRow.appendChild(redoBtn);

    // Move the task row to the Done column
    document.getElementById('done-column').appendChild(taskRow);
}

function moveToTasks(taskRow, deleteBtn, redoBtn) {
    // Remove the Delete and Redo buttons
    taskRow.removeChild(deleteBtn);
    taskRow.removeChild(redoBtn);

    // Recreate the Done button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function() {
        moveToDone(taskRow);
    });

    // Append the Done button to the task row
    taskRow.appendChild(doneBtn);

    // Move the task row back to the Task column
    document.getElementById('task-column').appendChild(taskRow);
}
