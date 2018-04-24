//Create an array of Words
    const word = ['diabetes', 'fat', 'sedintary', 'slow'];

//Choose words randomly
    let randNum = Math.floor(Math.random() * word.length);
    let chosenWord = word[randNum];
    let rightWord = [];
    let wrongWord = [];
    let underScore = [];

// Testing
console.log(chosenword);

//Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());

// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.KeyCode);
// if users guess is right    
    if(chosenword.indexOf(keyword) > -1) {
    // add to right words array
    rightWord.push(keyword);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    console.log(rightWord);

// if users guess is wrong
    wrongWord.push(keyWord);
    console.log(wrongWord);
    }
});
// Check if Guest is right
// If right push to right array
// If wrong push to wrong array