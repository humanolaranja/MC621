const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const almostPrime = (n) => {
    let output = 0;
    for (let numerator = 2; numerator <= n; numerator++) {
        let count = 0;
        for (let denominator = 2; denominator <= n; denominator++) {
            if (numerator % denominator == 0 && isPrime(denominator)) {
                count++
            }
            if (count > 2) {
                break;
            }
            if (n == denominator && count == 2) {
                output++
            }
        }

    }
    return output
}

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

readline.on('line', line => {
    readline.close(), console.log(almostPrime(Number(line)));
});