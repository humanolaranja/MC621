const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const complicatedGCD = (line) => {
    const elements = line.toString().split(' ');
    const a = elements[0]
    const b = elements[1]
    
    return a == b ? a : 1;
}

readline.on('line', line => {
    readline.close(), console.log(complicatedGCD(line));
});