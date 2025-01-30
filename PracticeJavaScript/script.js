// wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    //select the html elements
    const inputText = document.getElementById("input-text");
    const addButton = document.getElementById("add-button");
    const listContainer = document.getElementById("list-container");

    //define the addItem function that will handle adding items to the list when the button is clicked
    function addItem() {

        //get and trim the input value
        const itemText =inputText.value.trim(); //trim removes unnecessary spaces from the beginning and end of the input value

        //check if the input value is empty
        if(itemText === ""){
            alert("Please enter a value");
            return;
        }

        //create a new list item (li) element
        const listItem = document.createElement("li");

        //set the text content of the list item to the input value
        listItem.textContent = itemText;

        //append the new list item to the list container(ul)
        listContainer.appendChild(listItem);

        //clear the input field
        inputText.value = "";

    }

    //add an event listener to the button that will call the addItem function when the button is clicked
    addButton.addEventListener("click", addItem);

    // Allow pressing "Enter" key to add an item
    inputText.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
    });


});