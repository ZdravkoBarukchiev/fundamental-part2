function theImitationGame(arr) {
    let message = arr.shift()
    let token = arr.shift()
    while (token != 'Decode') {
        let tokenArr = token.split('|')
        let command = tokenArr[0]
        let messageArr = message.split('')
        let index = 0
        switch (command) {
            case 'ChangeAll':
                let subString = tokenArr[1]
                let replacmentStr = tokenArr[2]
                while (messageArr.includes(subString)) {
                    index = messageArr.indexOf(subString)
                    messageArr.splice(index, 1, replacmentStr)
                }
                message = messageArr.join('')
                break;
            case 'Insert':
                index = tokenArr[1]
                let value = tokenArr[2]
                messageArr.splice(index, 0, value)
                message = messageArr.join('')
                break;
            case 'Move':
                let num = tokenArr[1]
                let letters = message.substring(0, num)
                message = message.replace(letters, '')
                message = message + letters

                break;
        }

        token = arr.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])