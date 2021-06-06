// Component selection
let select = document.getElementById("select"); // Button to start
let words = document.getElementById("words"); // Word list
let wordNumbersInput = document.getElementById("wordNumbers"); // Input for the number of words
let option = document.getElementById("option"); // Type of separation
let result = document.getElementById("result"); // Label where the result will be displayed

// Event handler
select.addEventListener("click", (e) => {
  e.preventDefault();

  // Change the value of the input to a numerical value
  let wordNumbers = parseInt(wordNumbersInput.value);

  result.innerHTML = ""; // Reset values

  let wordsSplit = wordSplitHandler(words.value, option.value);

  if (isNaN(wordNumbers) || wordNumbers === 1) {
    wordSelectorHandler(wordsSplit);
  } else {
    if (wordNumbers >= wordsSplit.length) {
      result.innerHTML =
        "<p>La lista de palabras no puede ser menor al numero de palabras</p>";
    } else {
      wordSelectorHandler(wordsSplit, wordNumbers);
    }
  }
});

// Receive an word list and a separation option, is function retunrn a array with the words
function wordSplitHandler(wordList, optionInput) {
  let wordsSplit;

  switch (optionInput) {
    case "espacios":
      wordsSplit = wordList.split(" ");
      break;

    case "comas":
      wordsSplit = wordList.split(",");
      break;

    case "saltos":
      wordsSplit = wordList.split(/\n/);
  }

  return wordsSplit;
}

// Receive an array of words and the word numbers
function wordSelectorHandler(wordsSplit, wordNumbers) {
  let wordsSplitCopy = wordsSplit;
  for (let i = 0; i < wordNumbers; i++) {
    // Random location in the array
    let word = Math.floor(Math.random() * wordsSplitCopy.length);

    result.innerHTML += `<p>${wordsSplitCopy[word]}</p>`;
    
    wordsSplitCopy = wordsSplit.splice(word, 1);
  }
}
