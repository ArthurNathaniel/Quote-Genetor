const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein"
    }
    // Add more quotes as needed
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayRandomQuote() {
    const quoteContainer = document.getElementById("quote-container");
    const randomQuote = getRandomQuote();
    const quoteHTML = `
      <p>${randomQuote.text}</p>
      <p>- ${randomQuote.author}</p>
    `;
    quoteContainer.innerHTML = quoteHTML;
  }
    