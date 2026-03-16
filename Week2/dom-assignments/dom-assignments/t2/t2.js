// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

ul = document.getElementById("todoList");
for (let i = 0; i < todoList.length; i++) {
  ul.innerHTML += `<li><input type="checkbox" id="${todoList[i].id}" ${todoList[i].completed ? "checked" : ""}>  <label for="${todoList[i].id}">${todoList[i].task}</label>}</li>`;


}
