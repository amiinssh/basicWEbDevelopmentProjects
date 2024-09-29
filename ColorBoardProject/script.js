const container = document.getElementById("container");

const colors = ["#1D5B79" , "#468897" , "#EF6262" , "#F3AA60", "#16423C" , "#6A9C89", "#E9EFEC" , "#343131" , "#0B2F9F"]

const squares = 400

for(let i = 0; i < squares; i++){
    const square = document.createElement("div");
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square));

    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square)
}

function setColor(element){
    const color = randomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 3px `
}

function randomColor(){
    return colors [Math.floor(Math.random() * colors.length)]
}