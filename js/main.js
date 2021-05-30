// Component selection
let select = document.getElementById('select');
let words = document.getElementById('words');
let result = document.getElementById('result');

// Event handler
select.addEventListener('click', e => {
    e.preventDefault();

    // Array with the words
    let wordsSplit = words.value.split(',');

    // Random location in the array
    let word = Math.floor((Math.random() * (wordsSplit.length - 1 + 1) + 1)) - 1;

    // Insert the word with the random index into the HTML
    result.innerText = wordsSplit[word];
})