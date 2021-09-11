const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const petyaAndJava = (number) => {
    const value = BigInt(number);

    if(value < 128) {
        return 'byte';
    }
    if (value < 32768) {
        return 'short'
    }
    if (value < 2147483648) {
        return 'int'
    }
    if (value < 9223372036854775808) {
        return 'long'
    }
    return 'BigInteger'
}

readline.on('line', line => {
    readline.close(), console.log(petyaAndJava(line));
});