/*const itemForm = document.getElementById('item-form');
const itemImput = document.getElementById('item-list');
const itemList = document.getElementById('item-list');
const ClearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = document.getElementById('button');

let isEditmode= false; 

function displayItems(){
const itemsFromStorage=getItemsFromStorage();
itemsFromStorage.forEach((item)=> addItemToDom(item));
checkUI;
}
function onAddItemSubmit(e){
  e.prevenDefault();
const newItem = itemInput.value;
}
//validate input
if (newItem ==='') {
alert('Please add an item');
return;
}


//check for edit mode
if (isEditmode0){
const itemToEdit = itemList.querySelector('.edit-mode');

removeItemFromStorage(itemToEdit.TextConten);
itemToEdit.classList.remove('edit-mode');
itemToEdit.remove();
isEditmode = false;
}

//Create item DOM element 
addItemToStorage(newItem);

//Add item to local storage
addItemToStorage(newItem);

checkUI();

itemInput.value = '';

function addItemToDom(item){

  //Creat list item 

  const li = document. createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = creatButtton('remove-item btn-link text-red');
  li.appendChild(button);

  //Add li to the Dom

  itemList.appendChild(li);

}

function createButton(classes){
const button= document.creatElement('button');
const icon = createIcon ('fa-solid fa-xmark'
);
button.appendChild(icon);
return button;
}


function createIcon(classes){
const icon= document.createElement('i');
icon.className= classes;
return icon;
}

function addItemToStorage(item){

const itemsFromStorage = getItemsFromStorage();

//add new item to array 

itemsFromStorage.push(item);


//Convert to Json string and set to local storage

loocalStorage.setItem('items', JSON.stringify(itemsFromStorage));

function getItemsFromStorage(){
let itemsFromStorage;

if(localStorage.getItem('items')=== null){itemsFromStorage = [];
} else {
  itemsFromStorage = JSON.parse(localStorage.getItem('items'))
}
return itemsFromStorage;
}
 
function onClickItem(e) {
if (e.target.parenElement.classList.contains('remove-item'))
  removeItem(e.target.parenElement.parenElement);

} else {

  setItemToEdit(e.target);

}
function checkIfItemExits(item){
const itemsFromStorage = getItemsFromStorage();

if (itemsFromStorage.inclueds(item))
return true;

else{
  return false;
}
}

function setItemToEdit(item) {
  isEditmode = true;
itemList
.querySelector('li')
.foreach((i) => i.classList.remove('edit-mod'));

item.classList.add('edit-mode');
formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
formBtn.style.backgroundColor='#228b22';
itemInput.value = item.textContent;
}

function removeItem(item) {
if (confirm('Are you sure?')){
//remove item from Dom
item.remove();

//remove item from storage
removeItemFromStorage(item.textContent);

checkUI();

}

}
function removeItemFromStorage(item){
let itemsFromStorage= getItemsFromStorage();

//filter out item to be removed 
itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

//re-set to local Storage

localStorage.setItem('items', JSON.stringify(itemsFromStorage));
} 

function clearItems(){
  while(itemList.firstChild){
itemList.removeChild(itemList.firstChild);
}

//clear from local storage

localStorage.removeItem('items');

checkUI();
}

function filterItems(e){
const items = itemlist.querySelector('li');
const text = e.target.value.toLowerCase();

items.forEach((ITEM) => {
const itemNAME = item.firstChild.textContent.toLowerCase();

if(itemNAME.indexOf(text) != -1){
item.style.display='flex'; 
}else{
item.style.display= 'none';
}
});
}
function checkUI(){
itemInput.value = '';

const item = itemList.querySelector('li');

if (item.length === 0) {
  ClearBtn.style.display = 'none'
  itemFilter.style.display = 'none'
} else{
  ClearBtn.style.display = 'block'
  itemFilter.style.display = 'block'
  }

formBtn.innerHTML = '<i class"fa-solid fa-plus"></i> Add Item';
formBtn.style.backgroundColor='#333';
isEditMode= false; 


}

//intialize app 

function init(){
itemForm.addEventListener('submit', onAddItemSubmit );
itemList.addEventListener('click', onClickItem );
ClearBtn.addEventListener('click', clearItems );
itemFilter.addEventListener('input',filterItems );
document.addEventListener('DOMContentLoaded',displayItems );

}
checkUI();
*/
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = document.getElementById('button');

let isEditMode = false;

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDom(item));
    checkUI();
}

function onAddItemSubmit(e) {
    e.preventDefault();
    const newItem = itemInput.value;

    // Validate input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // Check for edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    }

    // Create item DOM element
    addItemToStorage(newItem);

    // Add item to local storage
    checkUI();
    itemInput.value = '';
}

function addItemToDom(item) {
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the Dom
    itemList.appendChild(li);
}

function createButton(classes) {
    const button = document.createElement('button');
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();

    // Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
    isEditMode = true;
    itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = 'green'; // Change color as needed
    itemInput.value = item.textContent;
}

function removeItem(item) {
    if (confirm('Are you sure?')) {
        // Remove item from Dom
        item.remove();

        // Remove item from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Re-set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // Clear from local storage
    localStorage.removeItem('items');

    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function checkUI() {
    itemInput.value = '';
    const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';
    isEditMode = false;
}

// Initialize app
function init() {
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);
}

init();