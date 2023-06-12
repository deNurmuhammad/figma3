let menu = document.querySelector('#menu-icons');
let navlist = document.querySelector('.navlist');

menu.onclic = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr =ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});
sr.reveal('.hero-text',{delay:10, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scrooll-down',{delay:500, origin:'right'});
