const button = document.querySelectorAll("a");
button.forEach(btn => {
    btn.addEventListener("click", function(s){
        let z = s.clientX - s.target.offsetLeft;
        let y = s.clientY - s.target.offsetTop;

        let click = document.createElement("span");
        click.style.left = z + "px";
        click.style.top = y + "px";
        this.appendChild(click);

        setTimeout(() => {
            click.remove()
        }, 800);
    })
});