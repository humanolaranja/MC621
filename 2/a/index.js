const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const sumTrick = (number) => {
    return `0 0 ${number}`;
}

readline.on('line', line => {
    readline.close(), console.log(sumTrick(line));
});