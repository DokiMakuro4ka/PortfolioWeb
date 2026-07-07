const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const navObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            navLinks.forEach(link=>{
                link.classList.remove("active");
                if(link.getAttribute("href")==="#"+entry.target.id){
                    link.classList.add("active");
                }
            });
        }
    });
},{
    threshold:.15
});

sections.forEach(section=>{
    navObserver.observe(section);
});

window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");
    nav.classList.toggle("scrolled",window.scrollY>40);
});

const burger = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burger && navMenu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });
}

const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const burger = document.getElementById('burgerBtn');
        const navMenu = document.getElementById('navMenu');
        if (burger && burger.classList.contains('active')) {
            burger.classList.remove('active');
            navMenu.classList.remove('open');
        }
    });
}