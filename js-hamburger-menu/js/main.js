const hamburgerToggle = document.getElementById('hamburger-menu-toggle');

hamburgerToggle.addEventListener(
    'click', function(){
        hamburgerToggle.classList.remove('active');
        document.querySelector('div.hamburger-menu').classList.add('active');
    });

const closeToggle = document.getElementById('close-menu-toggle');

closeToggle.addEventListener(
    'click', function(){
        closeToggle.classList.remove('active');
        document.querySelector('div.hamburger-menu').classList.remove('active');
        hamburgerToggle.classList.add('active');
    });