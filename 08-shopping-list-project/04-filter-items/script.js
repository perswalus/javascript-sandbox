const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter')
const items = itemList.querySelectorAll('li');


function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);


  // Add li to the DOM
  itemList.appendChild(li);

  

  itemInput.value = '';
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
  }
}





function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}


function filterItems(e){
  const items = itemList.querySelectorAll('li');
const text = e.target.value.toLowerCase();


console.log (text); 
items.foreach((items) => {
const itemName = item.firstChild

}

};
console.log(itemName);

function checkUI(){
  const items = itemList.querySelectorAll('li');
if (items.length === 0) {
clearBtn.style.display ='none';
itemFilter.style.display='none';
} else{
clearBtn.style.display='block';
itemFilter.style.display='block';
}
}


// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);


checkUI();

console.log(removeItem);