

let ham = document.querySelector('#all-ham');
let menu = document.querySelector('.ham-menu')

ham.addEventListener('click', function(){
    menu.classList.toggle('d-block')
    console.log(menu);
})


function myFunction(x) {
    x.classList.toggle("change");
    menu.classList.toggle('active')
    console.log(menu);
}




let lupa = document.querySelector('#lupa')
let search = document.querySelector('#sear1')

lupa.addEventListener('click', function(){
    search.classList.toggle('activee')
    console.log(search);
})


let down = document.querySelector('#down')
let lang = document.querySelector('#lang')

down.addEventListener('click', function(){
    lang.classList.toggle('activee')
    down.style.transform = 'rotate(180deg)'
    console.log(lang);
})
