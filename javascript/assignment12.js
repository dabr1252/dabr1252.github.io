
async function getQuote(){
  console.log("quote button was clicked");
  try{
    const response = await fetch (endpoint);
    if (!response.ok){
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.content);
    displayAuthor(json.author);
  }
  catch (err){
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text')
  quoteText.textContent = quote;
}

function displayAuthor(quote){
  const quoteText = document.querySelector('#js-cite-text')
  quoteText.textContent = quote;
}
// const endpoint = 'https://theaxolotlapi.netlify.app';
// const endpoint = 'https://catfact.ninja/fact';
const endpoint = 'https://api.quotable.io/random';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
