const list = document.querySelector('.list');

let tasks = [
    {
      title: 'Пиши тут, что захочешь!',
      done: false
    }
];

if(localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

// let tasks = [
//    {
//      title: 'Пиши тут, что захочешь!',
//      done: false
//    }
//];


render();

function render() {
  clear();

  tasks.forEach((task, index) => {
    let _element = document.createElement('div');
    _element.classList.add('element');
  
    let _input = document.createElement('input');
    _input.setAttribute('id', 'done');
    _input.setAttribute('type', 'checkbox');
    _input.setAttribute('onclick', 'onChecked(' + index + ');');
    _input.checked = task.done;
  
    let _paragraph = document.createElement('p');
    _paragraph.classList.add('text');
    _paragraph.textContent = task.title;
    if(task.done) { _paragraph.classList.add('checked') }

    let _button = document.createElement('button');
    _button.textContent = 'Удалить';
    _button.setAttribute('onclick', 'onDelete(' + index + ');');
  
    _element.appendChild(_input);
    _element.appendChild(_paragraph);
    _element.appendChild(_button);
    
    list.appendChild(_element);

    document.getElementById('count'). textContent = 'Количество задач: ' + tasks.length
  }); 
}

function clear() {
  let elements = document.querySelectorAll('.element');
  for(i=0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]);
  }
}

function add() {
  let _input = document.getElementById('item_add');
  let _element = {
    title: _input.value,
    done: false
  }
  tasks.push(_element);

  save();
  render();

  _input.value = '';
}

function onChecked(index) {
  if(tasks[index].done) {
    tasks[index].done = false;
  } else {
    tasks[index].done = true;
  }

  save();
  render();
}

function onDelete(index) {
  // delete tasks[index];
  tasks.splice(index, 1);

  save();
  render();
}

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
