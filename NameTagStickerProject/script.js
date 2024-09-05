let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Mohammad","Amin","Shafiezadeh"];

let colors = [

    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF1", "#FF3333",
    "#33FF33", "#FF8333", "#8333FF", "#33FF83", "#5733FF", "#FF3383",
    "#A1FF33", "#33A1FF", "#FF57A1", "#57FFA1", "#FF5733", "#33A1A1"

];

let sticker = function (name){

    let div = template.content.querySelector("div");
    let nameOfStick = div.querySelector(".name");

    nameOfStick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    div.style.transform = "rotate(" + (Math.random() * 40 -20) + "deg";

    let node = document.importNode(div,true);
    wrapper.appendChild(node)

}

setTimeout(refreshPage,1000);
function refreshPage(){
    location.reload();
}

names.forEach(sticker);
