const terminal = document.getElementById("terminal");
let currentSection = "";
let typing = false;
const terminalPages = {
    hero: `👋 Привет! Я Даниил — DevOps и Python разработчик.
Добро пожаловать в моё портфолио.
Стек: Python, Flask, Docker, Linux, CI/CD.
Сейчас работаю инженером ПК и развиваю собственные проекты.`,
    
    about: `📌 О себе:
• 3+ года в IT (с колледжа)
• Увлекаюсь сетями, автоматизацией, DevOps
• Спокойный, инициативный, системное мышление
• Хобби: кубик Рубика, игры, прогулки
• Люблю разбираться, как всё работает "под капотом"`,
    
    experience: `💼 Опыт работы:

🔹 IPDROM — Инженер ПК (авг. 2025 – н.в.)
   - Сборка и обслуживание ПК
   - Настройка BIOS/UEFI, установка ОС
   - Диагностика и тестирование оборудования

🔹 Development (личные проекты)
   - Backend на Python / Flask
   - Telegram боты и Mini Apps
   - Docker, CI/CD, PostgreSQL
   - Развёртывание на VPS

🔹 Алгоритмы и структуры данных на C++`,
    
    projects: `🚀 Проекты:

1. Логистический веб-сайт
   (Flask, PostgreSQL) — корзина, заказы, админка

2. Telegram RPG Bot "Barabulka"
   (Python, PostgreSQL, Telegram API) — игровая механика, Mini App

3. Telegram AI Assistant
   (Python, Flask, API) — обработка сообщений, интеграция с AI

4. Console Tic Tac Toe
   (Python) — игровая логика, обработка координат`,
    
    skills: `🛠 Навыки:

Языки:          Python, C++, C#, JS
Фреймворки:     Flask
Базы данных:    PostgreSQL
Инструменты:    Docker, Git, Linux, CI/CD
Веб:            HTML, CSS

Soft skills:    Коммуникация, ответственность,
                адаптивность, лидерство, teamwork`,
    
    contact: `📬 Контакты:

Telegram:   @NomikLover
Discord:    713836466106663003
GitHub:     DokiMakuro4ka
Email:      brumis01@mail.ru

Всегда открыт для новых идей и проектов!
Свяжитесь со мной — буду рад обсудить сотрудничество.`
};

async function type(text){
    if(typing) return;
    if (!text) {
        console.warn('type вызвана без текста');
        return;
    }
    typing = true;
    terminal.textContent = "";
    for(let i = 0; i < text.length; i++){
        terminal.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve,12));
    }
    typing = false;
}

function updateTerminal(section){
    if(currentSection === section) return;
    currentSection = section;
    type(terminalPages[section]);
}

window.addEventListener("DOMContentLoaded", () => {
    updateTerminal("hero");
});

function updateTerminal(section) {
    if (currentSection === section) return;
    const content = terminalPages[section];
    if (!content) {
        console.warn(`Нет контента для секции "${section}"`);
        return;
    }
    currentSection = section;
    type(content);
}

document.addEventListener('DOMContentLoaded', () => {
    const terminalBlock = document.querySelector('.hero-terminal');
    const greenDot = document.querySelector('.dot.green');
    if (!terminalBlock || !greenDot) return;

    const isCollapsed = localStorage.getItem('terminalCollapsed') === 'true';
    if (isCollapsed) {
        terminalBlock.classList.add('collapsed');
    }

    greenDot.addEventListener('click', (e) => {
        e.stopPropagation();
        terminalBlock.classList.toggle('collapsed');
        const collapsed = terminalBlock.classList.contains('collapsed');
        localStorage.setItem('terminalCollapsed', collapsed);
    });

    if (window.innerWidth <= 768 && !localStorage.getItem('terminalCollapsed')) {
        terminalBlock.classList.add('collapsed');
        localStorage.setItem('terminalCollapsed', 'true');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const terminalBlock = document.querySelector('.hero-terminal');
    const redDot = document.querySelector('.dot.red');
    const reopenBtn = document.getElementById('terminal-reopen-btn');

    if (!terminalBlock || !redDot || !reopenBtn) return;

    function setTerminalHidden(hidden) {
        localStorage.setItem('terminalHidden', hidden ? 'true' : 'false');
    }

    function getTerminalHidden() {
        return localStorage.getItem('terminalHidden') === 'true';
    }

    if (getTerminalHidden()) {
        terminalBlock.classList.add('hidden');
        reopenBtn.classList.add('show');
    }

    redDot.addEventListener('click', (e) => {
        e.stopPropagation();
        terminalBlock.classList.add('hidden');
        setTerminalHidden(true);
        reopenBtn.classList.add('show');
    });

    reopenBtn.addEventListener('click', () => {
        terminalBlock.classList.remove('hidden');
        setTerminalHidden(false);
        reopenBtn.classList.remove('show');
    });
    
    const yellowDot = document.querySelector('.dot.yellow');
    yellowDot.addEventListener('click', () => {
        if (terminalBlock.classList.contains('hidden')) {
            terminalBlock.classList.remove('hidden');
            setTerminalHidden(false);
            reopenBtn.classList.remove('show');
        }
    });

    if (window.innerWidth <= 768 && !localStorage.getItem('terminalHidden')) {
    }
});