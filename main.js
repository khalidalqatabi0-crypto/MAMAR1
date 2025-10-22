const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");
  
 menuBtn.addEventListener("click",(e) => {

    navLinks.classList.toggle("open");
    const isOpen= navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line": "ri-menu-line");
});
navLinks.addEventListener("click",(e) => {

    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})
const scrollRevealOption={
    origin:"bottom",
    destance:"50px",
    duration:1000
};
scrollReveal().reveal(".header__image img",{
    ...scrollRevealOption,
    origin:"right",

});
scrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".header__content p",{
    ...scrollRevealOption,
    delay:1000,
});
scrollReveal().reveal(".header__btns ",{
    ...scrollRevealOption,
    delay:1500,
});

const banner= document.querySelector(".banner__container");

const bannercontent= Array.from(banner.children);

bannercontent.forEach((item)=>{ 
    const duplicateNode=item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);

});
scrollReveal().reveal(".arrival__card ",{
    ...scrollRevealOption,
   
    interval:500,
});

scrollReveal().reveal(".sale__image img",{
    ...scrollRevealOption,
  origin:"left",
});
scrollReveal().reveal(".sale__content h2",{
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".sale__content p ",{
    ...scrollRevealOption,
    delay:1000,
});
scrollReveal().reveal(".sale__content h4 ",{
    ...scrollRevealOption,
    delay:1500,
});
scrollReveal().reveal(".sale__btns ",{
    ...scrollRevealOption,
    delay:2000,
});

scrollReveal().reveal(".favourite__card ",{
    ...scrollRevealOption,
   
    interval:500,
});
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
