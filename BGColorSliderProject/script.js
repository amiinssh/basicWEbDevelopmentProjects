const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById("rangeValue");

function updateStyle() {
    const value = Number(number.innerText);

    if (value >= 90) {
        applyStyle('#000', "#f5d300");
    } else if (value >= 70) {
        applyStyle('#333', "#fe53bb");
    } else if (value >= 50) {
        applyStyle('#555', "#fa55bc");
    } else if (value >= 40) {
        applyStyle('#fff', "#fe53eb");
    } else if (value >= 30) {
        applyStyle('red', "#09fbd3");
    } else if (value >= 20) {
        applyStyle('blue', "#08f7fe");
    } else if (value >= 10) {
        applyStyle('orange', "#333");
    } else {
        applyStyle('black', 'white');
    }
}

function applyStyle(color, backgroundColor) {
    body.style.color = color;
    body.style.backgroundColor = backgroundColor;
}

range.addEventListener("input", function () {
    const sliderValue = Math.min(this.value, 100);
    number.innerText = sliderValue;

    updateStyle();
});
