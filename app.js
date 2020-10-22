const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

//2.template generation function + appending to the innerHTML of the ul. 
const generateTemplate = todo => {
    const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span> ${todo} </span>
        <i class="fas fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html
}

//1.Submit todo form functionality

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim()

    //3.if value input by the user has any length we pass the template generation template then we reset the form.

    if (todo.length){
        generateTemplate(todo)
        addForm.reset()
    } 
})

/* 4. Delete todo functionality (event delegation) - we listen for a click on the ul then pass a function where we check if the clicked element has a class of delete we remove() its parent element. */

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
 })


//5. Search todo functionality

search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})


// filter function filters out the li's which do not match with the value searched for then adds a filtered class which sets them to display none.
const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))

}


