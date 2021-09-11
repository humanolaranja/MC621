
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const nextRound = (nk, a) => {
    const nkElements = nk.toString().split(' ');
    const k = nkElements[1];
    const aElements = a.toString().split(' ');
    let output = 0

    for (let i = 0; i < aElements.length; i++) {
        if (Number.parseInt(aElements[i]) >= Number.parseInt(aElements[k - 1]) && Number.parseInt(aElements[i])) {
            output++;
        }
    }

    return output;
}

var i = 0;
var nk = ""
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            nk = line;
            break;
        case 1:
        default:
            readline.close(), console.log(nextRound(nk, line));
            break;
    }
});