const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            updateTerminal(entry.target.id);
        }
    });
}, {
    threshold: 0.15
});
document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});


const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 150);
            });
            observer.unobserve(entry.target);
        }
    });
});
cardObserver.observe(document.querySelector("#projects"));