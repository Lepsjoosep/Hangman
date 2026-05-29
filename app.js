const wordContainerDiv = document.getElementById('word-container');
const alphabetContainerDiv = document.getElementById('alphabet-container')

const alphabet = "abcdefghijklmnopqrsšzžtuvõäöü"
const word = 'Kuressaare Ametikool';

let guess = '';

alphabet.forEach(l => {
    const letterDiv = document.createElement('div')
    
})

[...word].forEach(char => {

    if (alphabet.includes(char.toLowerCase()) ) {
        guess += '_ ';
    } else {
        guess += char + '  ';
    }

});

guess = guess.trim();
wordContainerDiv.innerText = guess;

document.addEventListener('keydown', e=> {
    
    for ( let i = 0; i < word.length; i++) {
        let c = word[i].toLowerCase();

        if ( c== e.key.toLowerCase() ) {

            let aGuess = guess.split('');
            aGuess[i*2] = word[i];
            guess = aGuess.join('');

            isCorrectLetter = true;
        }
        
    }
     wordContainerDiv.innerText = guess;
     const letterDiv = document.getElementById(e.key.toLowerCase());
     if( isCorrectLetter) {
        letterDiv.classList.add('correct');
     } else {
        letterDiv.classList.add('incorrect')
     }
});

function isLetter ( c ) {
    return !!c.match(/[\p{Letter}\p{Mark}]+/gu);
}
