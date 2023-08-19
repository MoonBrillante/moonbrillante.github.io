// 获取元素 Get the element
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
const clearButton = document.getElementById("clearButton"); // 添加清空按钮 Add the clear button

// 待办事项数组 Add an array of todo lists
let tasks = [];

// 当前正在编辑的任务索引 Index of the tasks currently being
let editingIndex = -1;

// 更新待办列表 Update the todo list
function updateTodoList() {
  todoList.innerHTML = ""; // 清空列表 Empty the list
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => startEditing(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(actionsDiv);
    todoList.appendChild(taskDiv);

  });

  // 显示或隐藏清空按钮 Show or hide the Clear button
  if (tasks.length === 0) {
    clearButton.style.display = "none";
  } else {
    clearButton.style.display = "block";
  }
}

// 添加任务 Add tasks
function addTask() {
  const task = taskInput.value;
  if (task.trim() !== "") {
    tasks.push(task);
    taskInput.value = ""; // 清空输入框 Clear the input box
    updateTodoList();
  }
}

// 开始编辑任务 Start edit tasks
function startEditing(index) {
  editingIndex = index;
  taskInput.value = tasks[index];
  taskInput.focus();
}

// 保存编辑后的任务 Save the edited task
function saveEditedTask() {
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    tasks[editingIndex] = newTask;
    editingIndex = -1; // 结束编辑状态 End the editing state
    taskInput.value = ""; // 清空输入框 Clear the input box
    updateTodoList();
  }
}

// 删除任务 Delete the tasks
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTodoList();
}

// 清空任务列表 Clear the list of tasks
function clearTodoList() {
  tasks = [];
  updateTodoList();
}

// 表单提交事件 Submit the form event
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止表单默认提交行为 Blocking the default form submission behavior
  if (editingIndex !== -1) {
    saveEditedTask();
  } else {
    addTask();
  }
});

// 输入框按键事件 Input box key events
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (editingIndex !== -1) {
      saveEditedTask();
    } else {
      addTask();
    }
  }
});

// 清空按钮点击事件 Clear the button click event
clearButton.addEventListener("click", function () {
  clearTodoList();
});

// 初始化 Initialize
updateTodoList();