const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }
  // Create item Dom Element 
addItemToDOM(newItem);


checkUI();


const li = document.createElement('li');
li.appendChild(document.createTextNode(newItem));
addItemToDOM(newItem);

 const button= createButton('remove-item btn-link text-red');
 li.appendChild(button);
}
itemList.appendChild(li);

function addItemToDOM(item){
let itemsFromStorage;
if(localStorage.getItem('items')===null)
{itemsFromStorage = []; 
}else{ 
  itemsFromStorage = JSON.parse(localStorage.getItem('items'));
}
//add new item to array
itemsFromStorage.push(item);

//convert to Json string and set to local storage
localStorage.setItem('items',JSON.stringify(itemsFromStorage));



}


checkUI();

  itemInput.value = '';

function addItemToDOM(item) {

  const li= document.createElement('li');
li.appendChild(document.createTextNode(newItem));

const button = createButton('romove-item btn')
  

   
}
if (localStorage.getItem('items')==null){
itemsFromStorage=localStorage.getItem('items')

}
 


function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
    // Update UI
    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  // Update UI
  checkUI();
}

function filterItems(e) {
 const items= itemList.querySelectorAll(
  'li'
 )
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(text)!= -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();

console.log(removeItem);

localStorage.setItem('name', 'Michael');
console.log(localStorage.getItem(
  'name'
));