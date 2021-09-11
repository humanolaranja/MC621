const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const theFibonacciSegment = (stringArray) => {
    const elements = stringArray.toString().split(' ');
    let max = 0;
    let count = 2;

    for (let index = 2; index < elements.length; index++) {
        if (Number.parseInt(elements[index]) === Number.parseInt(elements[index - 1]) + Number.parseInt(elements[index - 2])) {
            count++;
        } else {
            max = count > max ? count : max;
            count = 2;
        }
    }
    max = count > max ? count : max;

    return max > elements.length ? 1 : max;
}

var i = 0;
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            break;
        case 1:
        default:
            readline.close(), console.log(theFibonacciSegment(line));
            break;
    }
});