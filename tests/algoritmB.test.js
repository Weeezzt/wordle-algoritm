const { chooseWord }  = require('../js/algoritmB.js')  // Importera funktionen chooseWord från filen algob.js

// Testa funktionen chooseWord utan unika bokstäver och med ord på 4 bokstäver
test('algob chooseWord function', () => {
    expect(chooseWord(['KATT', 'HUNDEN', 'FISKEN', 'HÄSTEN', 'KANIN'], 4, false)).toBe(
        'KATT'
    )
})

// Testa funktionen chooseWord med unika bokstäver och med ord på 5 bokstäver
test('algob chooseWord function', () => {
    expect(chooseWord(['HUND', 'MATTE', 'TÄNDER', 'LEJON',], 5, true)).toBe(
        'LEJON'
    )
})

// Testa funktionen chooseWord utan unika bokstäver och med ord på 6 bokstäver som inte finns
test('algob chooseWord function', () => {
    expect(['SPRINT', 'TRÄDGA', 'FLYKTA', 'SKYLTA', 'PRICKA', 'LUFTIG']).toContain(
        chooseWord(['KATT', 'MEGATRON', 'LEGOLAS', 'GANDALF', 'MAN'], 6, false)
    )})