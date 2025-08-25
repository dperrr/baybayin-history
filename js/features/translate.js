// Simple Translator Script

// Basic mapping (only a few as example)
const baybayinMap = {
  "a": "ᜀ",
  "e": "ᜁ",
  "i": "ᜁ",
  "o": "ᜂ",
  "u": "ᜂ",
  "ba": "ᜊ",
  "ka": "ᜃ",
  "da": "ᜇ",
  "ga": "ᜄ",
  "ha": "ᜑ",
  "la": "ᜎ",
  "ma": "ᜋ",
  "na": "ᜈ",
  "pa": "ᜉ",
  "sa": "ᜐ",
  "ta": "ᜆ",
  "ya": "ᜌ",
  "wa": "ᜏ"
};

function translateToBaybayin() {
  const word = prompt("Enter a Filipino word to translate:");
  if (!word) return;

  let translation = "";
  const lowerWord = word.toLowerCase();

  // Try to match syllables first
  let i = 0;
  while (i < lowerWord.length) {
    let two = lowerWord.substring(i, i + 2); // syllable check
    let one = lowerWord.substring(i, i + 1);

    if (baybayinMap[two]) {
      translation += baybayinMap[two];
      i += 2;
    } else if (baybayinMap[one]) {
      translation += baybayinMap[one];
      i += 1;
    } else {
      translation += one; // fallback if no mapping
      i += 1;
    }
  }

  alert(`🔤 ${word} → ${translation}`);
}
