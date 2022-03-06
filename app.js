// 1. User clicks on the button
// 2. capture the text in the input field
// 3. display text on the screen
    // create the element
    // add text to element
    // add element as child to <ul>
// 4. when delete is clicked, delete the item
    // add a delete button
    // delete button on click, remove the item
        // add event listener, then delete parents
// 5. after item is added, clear text field
// 6. auto focus after added
// 7. enable enter to submit
// 8. remove blank submission
// 9. event bubbling (when click on the background, we want the alert shows but not when we click on the main app)
// 10. clear all tasks when click outside the app

const form = document.querySelector('.add');
const itemToAdd = document.querySelector('#itemToAdd');
const addButton = document.querySelector('#addButton');
const ul = document.querySelector(".todo");

// event bubbling (when click on the background, we want the alert shows but not when we click on the main app)
const body = document.querySelector('body');
const app = document.querySelector('.app');
app.addEventListener('click', function(event){
    event.stopPropagation();
})
// clear all tasks when click outside the app
body.addEventListener('click', function(event){
    ul.innerHTML = '';
} )


form.addEventListener('submit', function(event){
    event.preventDefault();
    if(itemToAdd.value){
        const newItem = createItem(itemToAdd.value);
        ul.appendChild(newItem);
        itemToAdd.value = '';
        itemToAdd.focus();
    }
})

function createItem(val){
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');

    item.textContent = val;
    delButton.textContent = 'Delete';
    delButton.classList.add('btn-link');

    item.appendChild(span);
    item.appendChild(delButton);

    delButton.addEventListener('click', function(){
        item.parentNode.removeChild(item);
    })

    return item;
}
