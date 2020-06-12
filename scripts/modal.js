const modal = document.querySelector('#modal')

document.querySelector('#search-button')
    .addEventListener('click',() => 
    modal.classList.remove('hide') );

document.querySelector('#modal .header a')
    .addEventListener('click',() => 
    modal.classList.add('hide') );


