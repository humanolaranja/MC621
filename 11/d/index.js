const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const dominoPiling = (domino) => {
    const elements = domino.split(" ")
    const m = Number(elements[0]);
    const n = Number(elements[1]);

    console.log(Math.floor(m * n / 2))
}

readline.on('line', line => {
    readline.close(), dominoPiling(line);
});