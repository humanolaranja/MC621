const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const joeIsOnTV = (line) => {
    const n = Number(line);
    let output = 0;
    for (let i = 1; i <= n; i++) {
        output += 1/i
    }
    return output.toPrecision(12);
}

readline.on('line', line => {
    readline.close(), console.log(joeIsOnTV(line));
});