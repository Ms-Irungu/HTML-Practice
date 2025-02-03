// Define variables to reference DOM elements
const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('add-btn');
const quotesList = document.getElementById('quotes-list');

// Load quotes from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadQuotes);

// Add event listener to the add button
addButton.addEventListener('click', addQuote);

/**
 * Loads all quotes from localStorage and displays them
 */
function loadQuotes() {
    // Get quotes from localStorage or initialize empty array if none exist
    const quotes = getQuotesFromStorage();
    
    // Clear the current list
    quotesList.innerHTML = '';
    
    // Display each quote
    quotes.forEach(quote => {
        displayQuote(quote);
    });
}

/**
 * Retrieves quotes from localStorage
 * @returns {Array} Array of quote objects
 */
function getQuotesFromStorage() {
    const quotes = localStorage.getItem('quotes');
    return quotes ? JSON.parse(quotes) : [];
}

/**
 * Adds a new quote to localStorage and displays it
 */
function addQuote() {
    // Get input values and trim whitespace
    const quoteText = quoteInput.value.trim();
    const authorText = authorInput.value.trim();
    
    // Validate inputs
    if (!quoteText || !authorText) {
        alert('Please fill in both the quote and author fields');
        return;
    }
    
    // Create quote object
    const quote = {
        id: Date.now().toString(), // Use timestamp as unique ID
        text: quoteText,
        author: authorText,
        timestamp: Date.now()
    };
    
    // Add to localStorage
    const quotes = getQuotesFromStorage();
    quotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    
    // Display the new quote
    displayQuote(quote);
    
    // Clear input fields
    quoteInput.value = '';
    authorInput.value = '';
}

/**
 * Creates and displays a quote element in the list
 * @param {Object} quote The quote object to display
 */
function displayQuote(quote) {
    // Create list item
    const li = document.createElement('li');
    li.className = 'quote-item';
    li.dataset.id = quote.id;
    
    // Create quote text
    const quoteText = document.createElement('div');
    quoteText.className = 'quote-text';
    quoteText.textContent = `"${quote.text}"`;
    
    // Create author text
    const authorText = document.createElement('div');
    authorText.className = 'quote-author';
    authorText.textContent = `— ${quote.author}`;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = '×';
    deleteButton.addEventListener('click', () => removeQuote(quote.id));
    
    // Assemble quote item
    li.appendChild(quoteText);
    li.appendChild(authorText);
    li.appendChild(deleteButton);
    
    // Add to list
    quotesList.appendChild(li);
}

/**
 * Removes a quote from localStorage and the display
 * @param {string} id The ID of the quote to remove
 */
function removeQuote(id) {
    // Remove from localStorage
    let quotes = getQuotesFromStorage();
    quotes = quotes.filter(quote => quote.id !== id);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    
    // Remove from display
    const quoteElement = document.querySelector(`[data-id="${id}"]`);
    if (quoteElement) {
        quoteElement.remove();
    }
}