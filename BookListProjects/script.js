const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const booklist = document.getElementById("book-list");
const form = document.getElementById("book-form"); 

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (title.value === "" || author.value === "" || year.value === "") {
        alert("Please fill in all the fields");
    } else {
        const newEle = document.createElement("div");
        newEle.classList.add("table-div");

        const newTitle = document.createElement("div");
        newTitle.innerHTML = title.value;
        newEle.appendChild(newTitle);

        const newAuthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newEle.appendChild(newAuthor);

        const newYear = document.createElement("div");
        newYear.innerHTML = year.value;
        newEle.appendChild(newYear);

        booklist.appendChild(newEle);

        title.value = "";
        author.value = "";
        year.value = "";
    }
});
