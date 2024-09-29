let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

let gradient_box = document.getElementById("gradient-box");
let color_code = document.getElementById("color-code");

function gradientChange() {
    const gradient = `linear-gradient(45deg, ${color1.value}, ${color2.value})`;
    gradient_box.style.background = gradient;
    color_code.value = gradient;
}

color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);
