// Matching Game Script
const pairs = {
  "ᜀ": "A",
  "ᜁ": "I / E",
  "ᜂ": "O / U",
  "ᜊ": "BA",
  "ᜃ": "KA"
};

function playMatchingGame() {
  const symbols = Object.keys(pairs);
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const answer = prompt(`What is the Filipino sound for: ${randomSymbol} ?`);

  if (answer && answer.toUpperCase() === pairs[randomSymbol].toUpperCase()) {
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! The correct answer is: ${pairs[randomSymbol]}`);
  }
}
