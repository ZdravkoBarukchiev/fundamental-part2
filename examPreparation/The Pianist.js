function thePianist(arr) {
    let piecesCount = Number(arr.shift())
    let obj = {}
    let pieces = []
    for (let i = 0; i < piecesCount; i++) {
        let tokenArr = arr.shift().split('|')
        let [piece, composer, key] = tokenArr
        obj = {
            piece,
            composer,
            key,
        }
        pieces.push(obj)
    }
    let token = arr.shift()
    while (token != 'Stop') {
        let tokenArr = token.split('|')
        let comand = tokenArr[0]
        switch (comand) {
            case 'Add':
                let pieceToAdd = tokenArr[1]
                let composerToAdd = tokenArr[2]
                let keyToAdd = tokenArr[3]
                let result = pieces.find(x => x.piece === pieceToAdd)
                if (result) {
                    console.log(`${pieceToAdd} is already in the collection!`);
                } else {
                    obj = {
                        piece: pieceToAdd,
                        composer: composerToAdd,
                        key: keyToAdd,
                    }
                    pieces.push(obj)
                    console.log(`${pieceToAdd} by ${composerToAdd} in ${keyToAdd} added to the collection!`);
                }
                break;
            case 'Remove':
                let pieceToRemove = tokenArr[1]
                let resultToRemove = pieces.find(a => a.piece === pieceToRemove)
                let index = pieces.indexOf(resultToRemove)
                if (resultToRemove) {
                    pieces.splice(index, 1)
                    console.log(`Successfully removed ${pieceToRemove}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let pieceToChanged = tokenArr[1]
                let newKey = tokenArr[2]
                let resultToChange = pieces.find(b => b.piece === pieceToChanged)
                let indexToChange = pieces.indexOf(resultToChange)
                if (resultToChange) {
                    pieces[indexToChange].key = newKey
                    console.log(`Changed the key of ${pieceToChanged} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToChanged} does not exist in the collection.`);
                }
                break;
        }
        token = arr.shift()
    }
    for (el of pieces) {
        console.log(`${el.piece} -> Composer: ${el.composer}, Key: ${el.key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)