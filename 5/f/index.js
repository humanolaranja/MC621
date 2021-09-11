const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const coPrimeArray = (numbers) => {
    const elements = numbers.toString().split(' ');
    let insertions = 0;
    let output = `${elements[0]} `;

    for (let index = 1; index < elements.length; index++) {
        if (gcd(Number(elements[index]), Number(elements[index - 1])) != 1) {
            insertions += 1
        }
    }

    console.log(insertions);

    for (let index = 1; index < elements.length; index++) {
        if (gcd(Number(elements[index]), Number(elements[index - 1])) != 1) {
            output += '1 '
        }
        output += `${elements[index]} `
    }

    return output
}

const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}


var i = 0;
readline.on('line', line => {
    if (i == 0) {
        i++
    } else {
        readline.close(), console.log(coPrimeArray(line));
    }
});