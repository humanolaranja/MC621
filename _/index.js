const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const problem1 = (array, number) => {
    const elements = array.toString().split(' ');
    const numbers = elements.map(el => Number(el));
    const x = Number(number);

    for (let index = 0; index < numbers.length; index++) {
        for (let j = numbers.length; j > 0; j--) {
            if(x == Number(number[index]) + Number(numbers[j])) {
                return `${index}, ${j} [${number[index]} + ${numbers[j]}]`
            }
        }
    }
    return '0, 0';
}

var i = 0;
var numbers = ""
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            numbers = line;
            break;
        case 1:
        default:
            readline.close(), console.log(problem1(numbers, line));
            break;
    }
});