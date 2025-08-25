// Story Mode Script
let currentLesson = 0;

const lessons = [
  { title: "Lesson 1: The Baybayin Alphabet", content: "Learn the 17 basic Baybayin characters." },
  { title: "Lesson 2: Vowel Sounds", content: "Understand the three vowels: ᜀ (A), ᜁ (I/E), ᜂ (O/U)." },
  { title: "Lesson 3: Consonant + Vowel", content: "Each Baybayin consonant already has an 'A' sound unless modified." }
];

function loadLesson() {
  if (currentLesson < lessons.length) {
    const lesson = lessons[currentLesson];
    alert(`${lesson.title}\n\n${lesson.content}`);
    currentLesson++;
  } else {
    alert("🎉 Congratulations! You have completed all available lessons!");
  }
}
