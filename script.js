let navItem = document.querySelector('.nav_item');

let dropdownEl = document.querySelector('.dropdown');

navItem.addEventListener('click', ()=>{
    dropdownEl.classList.toggle('open')
})