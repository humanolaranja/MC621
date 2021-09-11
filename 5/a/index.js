const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const almostPrime = (n) => {
    let output = 0;
    for (let numerator = 2; numerator <= n; numerator++) {
        let count = 0;
        for (let denominator = 2; denominator <= n; denominator++) {
            if (isPrime(denominator) && numerator % denominator == 0) {
                count++
            }
            if(n == denominator && count == 2) {
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