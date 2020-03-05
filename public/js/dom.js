const container = document.querySelector('#todo-container');
const finshedTodo = document.querySelector('.finsh-container');


const renderData = (data) => {
  const article = document.createElement('article');
  const description = document.createElement('h2');
  const condition = document.createElement('button');
  const deleteTodo = document.createElement('button');

  article.classList.add('todo-item');
  description.classList.add('todo__heading');
  condition.classList = "mark-button" + " fa " + "fa-" + (data.done ? "check-" : "") + "square-o";
  deleteTodo.classList.add('mark-button', 'fa', 'fa-trash');
  description.textContent = data.description;


  deleteTodo.id = data.id;
  deleteTodo.onclick = deleteElement;


  condition.id = data.id;
  condition.check = data.done;
  condition.onclick = changeCondition;

  article.appendChild(deleteTodo);

  if (data.done === true) {
    article.appendChild(condition);
    article.appendChild(description);
    finshedTodo.appendChild(article);
  } else {
    article.appendChild(condition);
    article.appendChild(description);
    container.appendChild(article);
  }
};

const getData = () => {
  fetch('/login').then((res) => res.json())
    .then((data) => {
      const sectionH1 = document.createElement('h2');
      sectionH1.textContent = "What's to do?";
      sectionH1.classList.add('wrapper__form__heading');

      const sectionH2 = document.createElement('h2');
      sectionH2.textContent = "It's done";
      sectionH2.classList.add('wrapper__form__heading');

      container.textContent = '';
      container.appendChild(sectionH1);

      finshedTodo.textContent = '';
      finshedTodo.appendChild(sectionH2);
      data.forEach((todo) => {
        renderData(todo);
      });
    })
    .catch((err) => err);
};
getData();

function deleteElement() {
  const data = { todoIdDeleted: this.id };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch('/delete', options).then((res) => res.json()).then(() => {
    getData();
  }).catch((err) => {
    console.log(err);
  });
}


function changeCondition() {
  const data = { todoId: this.id, done: this.check };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch('/condition', options).then((res) => res.json()).then(() => {
    getData();
  }).catch((err) => {
    console.log(err);
  });
}
