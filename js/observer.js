document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-item');
    if (!cards.length) {
        console.warn('Карточки проектов не найдены');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                if (typeof updateTerminal === 'function') {
                    updateTerminal(entry.target.id);
                } else {
                    console.warn('updateTerminal не определена');
                }
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".reveal").forEach(section => {
        observer.observe(section);
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (cards.length) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("show");
                        }, index * 150);
                    });
                }
                cardObserver.unobserve(entry.target);
            }
        });
    });

    const projectsElement = document.querySelector("#projects");
    if (projectsElement) {
        cardObserver.observe(projectsElement);
    } else {
        console.warn('Элемент #projects не найден');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            if (entry.target.id) {
                updateTerminal(entry.target.id);
            }
        }
    });
}, { threshold: 0.15 });

console.log('Сработала секция:', entry.target.id);