const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const helpFarAwayKingdom = (n) => {
    const elements = n.split(".");
    const integerElements = elements[0];
    const decimalElements = elements[1][0];

    if(integerElements[integerElements.length - 1] === '9') {
        console.log('GOTO Vasilisa.')
    } else {
        let output = BigInt(integerElements);
        if(decimalElements > 4) {
            output++
        }
        console.log(output.toString())
    }
}

readline.on('line', line => {
    readline.close(), helpFarAwayKingdom(line);
});