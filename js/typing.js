const text = "DevOps & Python Developer";
const element = document.getElementById("typing");
let index = 0;
function typeHeading() {
    if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(typeHeading, 70);
    }
}
window.addEventListener("load", () => {
    setTimeout(typeHeading, 3000);
});