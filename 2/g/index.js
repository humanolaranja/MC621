const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const modularExponentiation = (n, m) => {
    return Number.parseInt(m) % Math.pow(2, Number.parseInt(n));
}

var i = 0;
var n = ""
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            n = line;
            break;
        case 1:
        default:
            readline.close(), console.log(modularExponentiation(n, line));
            break;
    }
});