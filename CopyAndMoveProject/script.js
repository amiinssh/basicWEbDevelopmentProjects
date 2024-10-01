const copyText = document.querySelector("textarea[name=copyText]");
const finalText = document.querySelector("textarea[name=finalText]");
const copyBtn = document.querySelector(".copyBtn");
const moverBtn = document.querySelector(".moverBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
    let temp = copyText.value;
    copyToClip(temp);
})

moverBtn.addEventListener("click", () => {
    let temp = copyText.value;
    finalText.value = temp;    
})

copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());


function copyToClip(str){
    const outputContainer = document.querySelector(".output-container");
    const textarea = document.createElement("textarea");
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    outputContainer.removeChild(textarea);
    output.innerHTML = `<h2> Content Copied</h2>`;
    output.classList.add("added");
    setTimeout(() => {
        output.classList.toggle("added");
        output.textContent = "";
    }, 2000)
}