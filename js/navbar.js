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
    threshold:.45
});

sections.forEach(section=>{
    navObserver.observe(section);
});

window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");
    nav.classList.toggle("scrolled",window.scrollY>40);
});