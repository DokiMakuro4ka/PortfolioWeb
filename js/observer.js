const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});
document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});


const cards = document.querySelectorAll(".project-item");
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 150);
            });
        }
    });
});
cardObserver.observe(document.querySelector("#projects"));