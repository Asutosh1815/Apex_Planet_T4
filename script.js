const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

taskForm.onsubmit = e => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }
};

renderTasks();


const products = [
  { name: 'Smartphone', category: 'electronics', price: 300, rating: 4.5 },
  { name: 'T-Shirt', category: 'clothing', price: 20, rating: 4.0 },
  { name: 'Laptop', category: 'electronics', price: 800, rating: 4.8 },
  { name: 'Jeans', category: 'clothing', price: 40, rating: 4.2 }
];

const categoryFilter = document.getElementById('category-filter');
const sortBy = document.getElementById('sort-by');
const productList = document.getElementById('product-list');

function displayProducts(items) {
  productList.innerHTML = '';
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<h3>${p.name}</h3><p>Price: $${p.price}</p><p>Rating: ${p.rating}</p>`;
    productList.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sort = sortBy.value;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.onchange = filterAndSort;
sortBy.onchange = filterAndSort;

displayProducts(products);
