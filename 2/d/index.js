const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const currencySystemInGeraldion = (banknotes) => {
    const elements = banknotes.toString().split(' ');

    return elements.includes('1') ? -1 : 1;
}

var i = 0;
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            break;
        case 1:
        default:
            readline.close(), console.log(currencySystemInGeraldion(line));
            break;
    }
});