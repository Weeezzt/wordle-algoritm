
const { feedback } = require("../js/algoritmAv2.js")

test('test so that it gives correct to correct letter in the guess', () => {
    expect(feedback('CYKLA', 'BÄNKA')).toContainEqual(
        { A: 'correct' }
    )
})

test('Checks if every letter thats not there gets incorrect', () => {
    expect(feedback('CYKLA', 'RETUR')).toEqual([
        { R: 'incorrect' },
        { E: 'incorrect' },
        { T: 'incorrect' },
        { U: 'incorrect' },
        { R: 'incorrect' }
    ])
})

test('cecks if a perfect guess gets everything correct', () => {
    expect(feedback('CYKLA', 'CYKLA')).toEqual([
        { C: 'correct' },
        { Y: 'correct' },
        { K: 'correct' },
        { L: 'correct' },
        { A: 'correct' }
    ])
})

test('tests if misplaced works for letter at wrong position', () => {
    expect(feedback('BALEN', 'PELAD')).toEqual([
        { P: 'incorrect' },
        { E: 'misplaced' },
        { L: 'correct' },
        { A: 'misplaced' },
        { D: 'incorrect' }
    ])
})

test('tests so that the extra letter gets incorrect', () => {
    expect(feedback('CYKLA', 'HALLÅ')).toEqual([
        { H: 'incorrect' },
        { A: 'misplaced' },
        { L: 'incorrect' },
        { L: 'correct' },
        { Å: 'incorrect' }
    ])
})

test('tests two corrects of same letter', () => {
    expect(feedback('BOLLA', 'LILLA')).toEqual([
        { L: 'incorrect' },
        { I: 'incorrect' },
        { L: 'correct' },
        { L: 'correct' },
        { A: 'correct' }
    ])
})

test('tests special case', () => {
    expect(feedback('TTTII', 'TIIIT')).toEqual([
        { T: 'correct' },
        { I: 'incorrect' },
        { I: 'misplaced' },
        { I: 'correct' },
        { T: 'misplaced' }
    ])
})

test('tests special case', () => {
    expect(feedback('TIIIT', 'TTTII')).toEqual([
        { T: 'correct' },
        { T: 'misplaced' },
        { T: 'incorrect' },
        { I: 'correct' },
        { I: 'misplaced' }
    ])
})