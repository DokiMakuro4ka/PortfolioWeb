const terminal = document.getElementById("terminal");
let currentSection = "";
let typing = false;
const terminalPages = {
    hero: "...",
    about: "...",
    experience: "...",
    projects: "...",
    skills: "...",
    contact: "..."
};

async function type(text){
    if(typing) return;
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