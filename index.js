const addForm=document.querySelector(".add");
const liste=document.querySelector('.todos');
const search=document.querySelector('.search input');

const ecrire= text=>
{
    liste.innerHTML+=`<li class="list-group-item d-flex justify-content-between align-items-center">${text}<i class="fas fa-trash-alt delete"></i></li>`
};

addForm.addEventListener('submit',e=>
{
    e.preventDefault();
    const text=addForm.add.value;
    if(text.length)
    {
        ecrire(text);
        addForm.reset();
    }
});

liste.addEventListener('click',e=>{

    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

const filtertodos =(term)=>{

    //we convert it to array so we can use fillted method
   Array.from(liste.children)
   .filter(todo=> !todo.textContent.includes(term))
   .forEach(todo=>todo.classList.add('filtered'));

   Array.from(liste.children)
   .filter((todo)=> todo.textContent.includes(term))
   .forEach((todo)=>todo.classList.remove('filtered'));
   
};

//for search input
search.addEventListener('keyup',e=>{

    const term=search.value.trim();
    filtertodos(term);
});