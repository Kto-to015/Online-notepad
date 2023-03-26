const list = document.querySelector('.list');

let tasks = [
  {
    title: 'Задача 1',
    done: true
  },
  {
    title: 'Задача 2',
    done: false
  },
  {
    title: 'Задача 3',
    done: false
  }
];

document.getElementById('count'). textContent = 'Количество задач: ' + tasks.length

render();

function render() {
  clear();
  tasks.forEach(task => {
    let _element = document.createElement('div');
    _element.classList.add('element');
  
    let _input = document.createElement('input');
    _input.setAttribute('id', 'done');
    _input.setAttribute('type', 'checkbox');
  
    let _paragraph = document.createElement('p');
    _paragraph.classList.add('text');
    _paragraph.textContent = task.title;
  
    _element.appendChild(_input);
    _element.appendChild(_paragraph);
    
    list.appendChild(_element);
  
    console.log(_element);
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

  render();

  _input.value = '';
}