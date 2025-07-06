document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="answer"]:checked');
  if (answer && answer.value === "Paris") {
    document.getElementById('result').textContent = "Correct!";
  } else {
    document.getElementById('result').textContent = "Incorrect, try again.";
  }
});

async function getJoke() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await response.json();
  document.getElementById('joke').textContent = `${data.setup} — ${data.punchline}`;
}