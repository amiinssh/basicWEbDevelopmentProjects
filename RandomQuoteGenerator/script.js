const generateQuote = () => {
    let url = "https://type.fit/api/quotes"; 
    
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let randomNum = Math.floor(Math.random() * data.length); 
            let randomQuote = data[randomNum]; 
            
            document.getElementById("quote").innerHTML = randomQuote.text ? randomQuote.text : "No quote available";
            document.getElementById("author").innerHTML = randomQuote.author ? randomQuote.author : "Unknown author";
        })
        .catch(function (error) {
            console.error("Error fetching the quote: ", error);
        });
};
