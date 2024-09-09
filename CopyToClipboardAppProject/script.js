const button = document.getElementById('copy');
const main_paraghraph = document.getElementById('main_paraghraph');
const message = document.getElementById('message');

function copyToClipBoard(element){

    navigator.clipboard.writeText(element.textContent).then(()=>{
        message.textContent = "Copied to clipboard";
        message.classList.add("after-clicked");
    })
    .catch((err)=>{
        console.log('Unable to copy the text!');
    })
    .finally(()=>{
        setTimeout(()=>{
            message.textContent = "";
            message.classList.remove("after-clicked");
        },2000);
    });

}

button.addEventListener("click",()=>copyToClipBoard(main_paraghraph));

