const feedback = (word, guess) => {
    // Throw error if word and guess are not the same length
    if(word.length !== guess.length) {
        throw new Error('Word and guess must be the same length')
    }

    //Declaring some variables
    let result = []
    const wordCount = {}
    const guessCount = {}

    //Splitting the word and guess into arrays and converting to uppercase
    const wordArr = word.toUpperCase().split('')
    const guessArr = guess.toUpperCase().split('')

    //Counting the number of each letter in the word and guess
    wordArr.forEach(letter => wordCount[letter] = (wordCount[letter] || 0) + 1);
    guessArr.forEach(letter => guessCount[letter] = (guessCount[letter] || 0) + 1);

    //Checking for correct letters in correct position
    for(let i = 0; i < wordArr.length; i++) {
        if(guessArr[i] === wordArr[i]) {
            result.push({ [guessArr[i]]: 'correct' })
            wordCount[guessArr[i]]--
            guessCount[guessArr[i]]--

            //if the letter count is below zero then one misplaced letter should be incorrect instead, so we change it
            if(wordCount[guessArr[i]] < 0){
                result.find(obj => obj[guessArr[i]] === 'misplaced')[guessArr[i]] = 'incorrect'
            }

          //Checking for correct letters in incorrect position  
        } else if(wordCount[guessArr[i]] > 0) {
            result.push({ [guessArr[i]]: 'misplaced' })
            wordCount[guessArr[i]]--
            guessCount[guessArr[i]]--
        } else {
            result.push({ [guessArr[i]]: 'incorrect' })
        }
    } 

    return result
}

module.exports = { feedback }