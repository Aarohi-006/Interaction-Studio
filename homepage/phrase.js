:::writing{variant="standard" id="js991"}
const phrases = [
  "rising incense smoke",
  "glowing ritual lights",
  "mist-covered mountains",
  "still water reflections",
  "neon chaos",
  "midnight crossing"
];

function randomPhrase(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  const line = `${randomPhrase(phrases)} meets ${randomPhrase(phrases)}`;
  const output = document.getElementById("output");

  output.classList.remove("show");
  void output.offsetWidth;

  output.innerText = line;

  output.classList.add("show");
}
:::
