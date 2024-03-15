//Test to see if the algoa function is working properly 

const { feedback } = require("../js/algoritmAv2.js")

test('feedback function', () => {
    expect(feedback('CYKLA', 'BÄNKA')).toContainEqual(
        { A: 'correct' }
    )
})

test('feedback function', () => {
    expect(feedback('CYKLA', 'RETUR')).toEqual([
        { R: 'incorrect' },
        { E: 'incorrect' },
        { T: 'incorrect' },
        { U: 'incorrect' },
        { R: 'incorrect' }
    ])
})

test('feedback function', () => {
    expect(feedback('CYKLA', 'CYKLA')).toEqual([
        { C: 'correct' },
        { Y: 'correct' },
        { K: 'correct' },
        { L: 'correct' },
        { A: 'correct' }
    ])
})

test('feedback function', () => {
    expect(feedback('CYKLA', 'HALLÅ')).toEqual([
        { H: 'incorrect' },
        { A: 'misplaced' },
        { L: 'incorrect' },
        { L: 'correct' },
        { Å: 'incorrect' }
    ])
})

test('feedback function', () => {
    expect(feedback('BALEN', 'PELAD')).toEqual([
        { P: 'incorrect' },
        { E: 'misplaced' },
        { L: 'correct' },
        { A: 'misplaced' },
        { D: 'incorrect' }
    ])
})

test('feedback function', () => {
    expect(feedback('BOLLA', 'LILLA')).toEqual([
        { L: 'incorrect' },
        { I: 'incorrect' },
        { L: 'correct' },
        { L: 'correct' },
        { A: 'correct' }
    ])
})

test('feedback function', () => {
    expect(feedback('TTTII', 'TIIIT')).toEqual([
        { T: 'correct' },
        { I: 'incorrect' },
        { I: 'misplaced' },
        { I: 'correct' },
        { T: 'misplaced' }
    ])
})

test('feedback function', () => {
    expect(feedback('TIIIT', 'TTTII')).toEqual([
        { T: 'correct' },
        { T: 'misplaced' },
        { T: 'incorrect' },
        { I: 'correct' },
        { I: 'misplaced' }
    ])
})