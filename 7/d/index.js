const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const polandBallandHypothesis = (number) => {
    console.log(number > 2 ? number - 2 : number + 2)
}

readline.on('line', line => {
    readline.close(), polandBallandHypothesis(Number(line));
});