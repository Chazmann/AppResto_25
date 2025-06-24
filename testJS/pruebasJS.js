let menuTrigger = document.querySelector('#btnPrueba');
let menu = document.querySelector('#menuPrueba');

menuTrigger.addEventListener('click', function() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});