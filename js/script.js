const t = document.querySelector('.toggle')
const ul = document.querySelector('ul.mobile')

function abrir(){
    t.classList.add('t-active')
    ul.classList.add('active-ul')
}

function fechar(){
    t.classList.remove('t-active')
    ul.classList.remove('active-ul')
}

t.addEventListener('click',()=>{
    if(ul.classList.contains('active-ul')){
        fechar();
    } else{
        abrir();
    }
})