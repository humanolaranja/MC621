const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const benches = (number) => {
    let output = BigInt(1);
    for (let index = 0; index < 5; index++) {
        output *= (number - BigInt(index));
    }
    output /= BigInt(120);
    console.log((BigInt(120) * output * output).toString());
}

readline.on('line', line => {
    readline.close(), benches(BigInt(line));
});