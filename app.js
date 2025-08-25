// Habi ng Wika Main Script

// Example: Word of the Day
const dailyWords = [
  { word: "Araw", baybayin: "ᜀᜇᜏ" },
  { word: "Gabi", baybayin: "ᜄᜊᜒ" },
  { word: "Puso", baybayin: "ᜉᜓᜐᜓ" },
  { word: "Lupa", baybayin: "ᜎᜓᜉ" }
];

function showDailyWord() {
  const random = dailyWords[Math.floor(Math.random() * dailyWords.length)];
  alert(`Word of the Day:\n${random.word} → ${random.baybayin}`);
}

// Show daily word on page load
window.onload = showDailyWord;
