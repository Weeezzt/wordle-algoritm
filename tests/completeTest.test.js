const {feedback} = require('../js/algoritmAv2.js');
const {chooseWord} = require('../js/algoritmB.js');

test('feedback with chooseWord och rätt gissning', () => {
    expect(feedback(chooseWord(['KATT', 'HUNDEN', 'FISKEN', 'HÄSTEN', 'KANIN'], 4, false), 'KATT')).toEqual([
        { K: 'correct' },
        { A: 'correct' },
        { T: 'correct' },
        { T: 'correct' }
    ])
})

test('feedback with chooseWord och fel gissning', () => {
    expect(feedback(chooseWord(['HUND', 'MATTE', 'TÄNDER', 'LEJON',], 5, true), 'REGNA')).toEqual([
        { R: 'incorrect' },
        { E: 'correct' },
        { G: 'incorrect' },
        { N: 'misplaced' },
        { A: 'incorrect' }
    ])
})

test('feedback with chooseWord och totalt fel gissning', () => {
    expect(feedback(chooseWord(['KATT', 'HUNDEN', 'FISKEN', 'HÄSTEN', 'KANIN'], 4, false), 'HUND')).toEqual([
        { H: 'incorrect' },
        { U: 'incorrect' },
        { N: 'incorrect' },
        { D: 'incorrect' }
    ])
})