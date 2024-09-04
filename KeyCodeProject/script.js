const container = document.getElementById("keyContainer");

container.innerHTML = generateHTML("-", "-", "-");

window.addEventListener("keydown", (e) => {
    container.innerHTML = generateHTML(e.key === " " ? "Space" : e.key, e.code, e.key.charCodeAt(0));
});

function generateHTML(key, code, keyCode) {
    return `
        <div class="key-block">
            <h4>Key Code</h4>
            <div class="key-container">${key}</div>
        </div>

        <div class="key-block">
            <h4>Key Code</h4>
            <div class="key-container">${code}</div>
        </div>

        <div class="key-block">
            <h4>Key Code</h4>
            <div class="key-container">${keyCode}</div>
        </div>
    `;
}
