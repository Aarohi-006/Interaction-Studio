const phrases = [
  "rising incense smoke",
  "glowing ritual lights",
  "mist-covered mountains",
  "still water reflections",
  "neon chaos",
  "midnight crossing"
];

// pick random phrase
function randomPhrase(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// generate and display with animation
function generate() {
  const line = `${randomPhrase(phrases)} meets ${randomPhrase(phrases)}`;
  const output = document.getElementById("output");

  // reset animation
  output.classList.remove("show");
  void output.offsetWidth;

  // update text
  output.innerText = line;

  // trigger animation
  output.classList.add("show");
}
