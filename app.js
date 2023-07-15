const buttons = document.getElementsByClassName('return_top');
const nav = document.getElementById("mainNavbar");

for (let button of buttons)
{
    button.addEventListener('click', () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop > nav.offsetHeight || document.documentElement.scrollTop > nav.offsetHeight) {
        nav.classList.add("scrolled");
    } 
    else{
        nav.classList.remove("scrolled");
    }
};