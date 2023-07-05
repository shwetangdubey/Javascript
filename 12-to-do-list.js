const todoList = [];

walkThrough();
function walkThrough() {
  let todo = '';
  todoList.forEach( (value, index) => {
   
    const {name, inputDate} = value;
    todo += `
    <div class="input-task">${name}</div>
    <div class="input-dateTime">${inputDate}</div>
    <button "
      onclick="
        
      " class="format-delete-button js-add-delete"
    >Delete</button>`;
  })
  /*
  for (let i = 0; i < todoList.length; i++) {
    const todoWork = todoList[i];
    const {name, inputDate} = todoWork
    todo += `
    <div class="input-task">${name}</div>
    <div class="input-dateTime">${inputDate}</div>
    <button "
      onclick="
        todoList.splice(${i},1);
        walkThrough();
      " class="format-delete-button"
    ">Delete</button>`;
    //console.log(todo);

  } 
  */
  //console.log(todo);
  document.querySelector('.js-todoList')
    .innerHTML = todo;

  document.querySelectorAll('.js-add-delete')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        walkThrough();
      });
    });
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const inputdate = document.querySelector('.js-datetime');
  const name = inputElement.value;
  const inputDate = inputdate.value;
  todoList.push({name, inputDate});
  walkThrough();
  inputElement.value = '';
  inputdate.value='';
  
}

document.querySelector('.js-add-listener')
  .addEventListener('click', () => {
    addTodo();
  } )
  