const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const pashaAndStick = (line) => {
    let n = Number(line);
    if (n % 2 == 1) {
        return 0
    }

    n = Math.floor(n / 2)
    if (n % 2 == 0) {
        n--
    }

    return Math.floor(n / 2)
}

readline.on('line', line => {
    readline.close(), console.log(pashaAndStick(line));
});