const text = "DevOps & Python Developer";
const element = document.getElementById("typing");
let index = 0;
function type(){
    if(index < text.length){
        element.textContent += text[index];
        index++;
        setTimeout(type,70);
    }
}
window.addEventListener("load",()=>{
    setTimeout(type,3000);
});