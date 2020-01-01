//quotes
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    background: "#6a1b9a"
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    background: "#283593"
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    source: "James Cameron",
    background: "#00796b"
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson",
    background: "#757575"
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    background: "#546e7a"
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    background: "#5c6bc0"
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison",
    background: "#2e7d32"
  }
];

//get random quote
const getRandomQuote = function() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};

//print quote
function printQuote() {
  const showQuote = getRandomQuote();
  let print = "";
  print =
    '<p class="quote">' +
    showQuote.quote +
    '<p class="source">' +
    showQuote.source +
    "</p>";

  document.getElementById("quote-box").innerHTML = print;
  document.body.style.backgroundColor = showQuote.background;
  document.getElementById("loadQuote").style.backgroundColor =
    showQuote.background;
}

//show another quote
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
