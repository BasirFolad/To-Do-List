function addTask(){
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText === ''){
        alert('please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;

    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';
}

function removeTask(button){
    const li = button.parentElement;
    li.remove();
}