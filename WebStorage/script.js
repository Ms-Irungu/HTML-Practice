document.addEventListener("DOMContentLoaded", function () {

    // Define variables for quote, author, and button
    const quoteInput = document.getElementById("quote");
    const authorInput = document.getElementById("author");
    const addButton = document.getElementById("add-btn");
    const quoteList = document.getElementById("quotes-list");

    // Add event listener to button
    addButton.addEventListener("click", function () {

    });

    function addQuote() {

        //retrieve input fields for both quotes and authors
        const quoteText = quoteInput.value.trim();
        const authorText = authorInput.value.trim();

        //Check if both the quote and author fields are filled out
        if (quoteText === "" || authorText === "") {
            alert("Please enter both the quote and author.")
            return;
        }

        //If both fields are filled, create a JavaScript object to represent the quote, including properties for the quote text and author.
        const newQuote = {quote: quoteText, author: authorText };

        //Convert the JavaScript object to a JSON string using JSON.stringify().Store the JSON string in local storage using localStorage.setItem() with a unique key.
        localStorage.setItem("quotes", JSON.stringify(newQuote));

    }

    // Implement the function for displaying stored quotes:
    function displayQuotes(){

        // Retrieve all stored items from local storage using localStorage.getItem()
        const storedQuotesJSON = localStorage.getItem("quotes");

        //parse each stored JSON String into a JavaScrip object using JSON.parse(). Add each object to an array.
        const storedQuotes = JSON.parse(storedQuotesJSON) || [];

        //Iterate over the array of objects and create a new list item for each object. Add the quote text and author to the list item's innerHTML.
        storedQuotes.forEach(quoteObj => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${quoteObj.quote} - ${quoteObj.author}`;
            quoteList.appendChild(listItem);
        });
    }

    //Implement a function for removing quotes
    function removeQuotes(){
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem); // Remove the task from the list
    });
    }
















});