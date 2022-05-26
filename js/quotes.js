const quotes = [
  {
    quote:
      "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  { quote: "Keep calm and carry on.", author: "Winston Churchill" },
  {
    quote: "Have no fear of perfection, you'll never reach it.",
    author: "Salvador Dali",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estee Lauder",
  },
  { quote: "I failed my way to success.", author: "Thomas Edison" },
  { quote: "Happy ending is mine", author: "Me" },
  { quote: "I never saved anything for the swim back.", author: "Gattaca" },
  { quote: "Just do it.", author: "Nike" },
  {
    quote: "Do one thing everyday that scares you.",
    author: "Eleanor Roosevelt",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
