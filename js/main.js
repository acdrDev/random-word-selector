// Component selection
let select = document.getElementById("select");
let words = document.getElementById("words");
let wordNumbersInput = document.getElementById("wordNumbers");
let result = document.getElementById("result");

// Event handler
select.addEventListener("click", (e) => {
  e.preventDefault();

  // Change the value of the input to a numerical value
  let wordNumbers = parseInt(wordNumbersInput.value);

  result.innerHTML = ""; // Reset values

  let wordsSplit = words.value.split(","); // Array with the words

  if (isNaN(wordNumbers) || wordNumbers === 1) {
    wordSelectorHandler(wordsSplit);
  } else {
    if (wordNumbers > wordsSplit.length) {
      result.innerHTML =
        "<p>La lista de palabras no puede ser menor al numero de palabras</p>";
    } else {
      for (let i = 0; i < wordNumbers; i++) {
        wordSelectorHandler(wordsSplit);
      }
    }
  }
});

// Receive an array of words
function wordSelectorHandler(wordsSplit) {
  // Random location in the array
  let word = Math.floor(Math.random() * (wordsSplit.length - 1 + 1) + 1) - 1;

  result.innerHTML += `<p>${wordsSplit[word]}</p>`;
}
