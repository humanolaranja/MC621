const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const bicycleChain = (n, m) => {
    const nElements = n.toString().split(' ');
    const mElements = m.toString().split(' ');
    let max = 0;
    let output = 0;

    for (let i = 0; i < mElements.length; i++) {
        for (let j = 0; j < nElements.length; j++) {
            if (mElements[i] % nElements[j] == 0) {
                if (mElements[i] / nElements[j] > max) {
                    max = mElements[i] / nElements[j];
                    output = 1;
                } else if (mElements[i] / nElements[j] == max) {
                    output++;
                }
            }
        }
    }

    return output;
}

var i = 0;
var n = ""
readline.on('line', line => {
    switch (i) {
        case 0:
        case 2:
            i++;
            break;
        case 1:
            n = line;
            i++
            break;
        case 3:
        default:
            readline.close(), console.log(bicycleChain(n, line));
            break;
    }
});