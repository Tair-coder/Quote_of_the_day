// const arrayOfQuotes = [
//     {'author': 'Jim Rohn', 
//      'quote': 'Beware of what you become in pursuit of what you want.'
//     },
//     {'author': 'Epictetus', 
//      'quote': 'It\'s not what happens to you, but how you react to it that matters.'
//     },
//     {'author': 'Frank Sinatra', 
//      'quote': 'The best revenge is massive success.'
//     },
//     {'author': 'Wayne Gretzy', 
//      'quote': 'You miss 100% of the shots you don\'t take.'
//     },
//     {'author': 'Nelson Mandela', 
//      'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
//     },
//     {'author': 'Elbert Hubbard', 
//      'quote': 'Do not take life too seriously. You will not get out alive.'
//     },
// ];
// let btnOfQuotes = document.querySelector('.btn__quote'),
//     quoteOfString = document.querySelector('.quote'),
//     authorOfQuote = document.querySelector('.author__quote');

//     btnOfQuotes.addEventListener('click',()=>{
//         let random = Math.floor(Math.random()*(arrayOfQuotes.length - 1 + 1) + 0)
//         quoteOfString.textContent = `\"${arrayOfQuotes[random].quote}\"`
//         authorOfQuote.textContent = `\"${arrayOfQuotes[random].author}\"`
//     })






//     Api for fetch anime quote and author 
btnOfQuotes.addEventListener('click',()=> {
    fetch('https://animechan.vercel.app/api/random')
    .then(response =>response.json())
    .then(function(quote){
        quoteOfString.textContent = `\"${quote.quote}\"`
        authorOfQuote.textContent = `\"${quote.character}\"`
    })
})
