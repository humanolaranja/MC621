const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeSubstraction = (elements) => {
    for (let index = 0; index < elements.length; index++) {
        const numbers = elements[index].toString().split(' ');
        const a = BigInt(numbers[0])
        const b = BigInt(numbers[1])

        const output = a - b > 1 ? "YES" : "NO"
        
        if (index == elements.length - 1) {
            return output
        } else {
            console.log(output)
        }

    }
}

const chunk = (arr, chunkSize) => {
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
}

var i = 0;
var inputs = 0;
var elements = [];

readline.on('line', line => {
    if (i == 0) {
        inputs = line;
        i++;
    } else {
        if (i == inputs) {
            elements.push(line);
            readline.close(), console.log(primeSubstraction(chunk(elements, inputs)[0]));
        } else {
            i++
            elements.push(line);
        }
    }
});