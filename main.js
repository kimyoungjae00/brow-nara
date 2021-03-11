'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu and home button
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e)=> {
    const target = e.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    scrollintoView(link);

});

const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', ()=> {
    scrollintoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity=(1- window.scrollY / homeHeight)+0.4;
});

// Show "arrow up" button when scrolling down
const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight/2){
        arrowup.classList.add('visible');
    } else {
        arrowup.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrowup.addEventListener('click', ()=>{
    scrollintoView('#home');
});

// Project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const project = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=> {
    const filter = e.target.dataset.filter;
    if(filter == null){
        return;
    }
    // Remove selection from the previous item and select the new one.
    if(document.querySelector('.category__btn.selected') !== null) {
        const active = document.querySelector('.category__btn.selected');
        active.classList.remove('selected');
    } 
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=> {
        project.forEach((project) => {
            if(filter === project.dataset.type) {
                project.classList.add('visible');
            } else {
                project.classList.remove('visible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 200);

});

function scrollintoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}