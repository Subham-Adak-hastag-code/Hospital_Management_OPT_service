/*==================== toggle icon navber ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
};

/*==================== scroll section avtive link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navber when click navber link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navber.classList.remove('active');
};

 /*==================== scroll reveal ====================*/
 ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .apps-container, .testimanials-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .doctor-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .doctor-content', { origin: 'right' });