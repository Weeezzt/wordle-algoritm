const chooseWord = (wordList, wordLength, uniqueLetters) => {
    // Creating some backup words to use if the wordList is empty
    const BACKUPFIVE = ['KRAFT', 'BLINK', 'KLUNG', 'TRAMP', 'BRICK', 'FLYKT', 'GRANS', 'SKYLT', 'PRICK'];
    const BACKUPFOUR = ['KANT', 'HUND', 'FISK', 'HÄST', 'BOKS', 'STOL', 'BORD', 'FORT', 'BILA'];
    const BACKUPSIX = ['SPRINT', 'TRÄDGA', 'FLYKTA', 'SKYLTA', 'PRICKA', 'LUFTIG'];

    // Filtering the wordList to only contain words with the correct length
    wordList = wordList.filter(word => word.length === wordLength)

    // If uniqueLetters is true, filter the wordList to only contain words with unique letters
    if(uniqueLetters) {
        wordList.forEach(word => {
           
           for (let i = 0; i < word.length; i++) {
                for (let j = i + 1; j < word.length; j++) {
                    if(word[i] === word[j]) {
                        wordList.splice(wordList.indexOf(word), 1)
                    }
                }

           }
        })
    }

    // If the wordList is empty, return a random word from the backup list
    if(wordList.length === 0) {
        if(wordLength === 4) {
            return BACKUPFOUR[Math.floor(Math.random() * BACKUPFOUR.length)]
        }
        else if(wordLength === 5) {
            return BACKUPFIVE[Math.floor(Math.random() * BACKUPFIVE.length)]
        }
        else {
            return BACKUPSIX[Math.floor(Math.random() * BACKUPSIX.length)]
        }
    }

    // Return a random word from the wordList
    return wordList[Math.floor(Math.random() * wordList.length)]

    
}

module.exports = { chooseWord }