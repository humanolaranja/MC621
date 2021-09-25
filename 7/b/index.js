const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const divisibilityProblem = (elements) => {
    for (let index = 0; index < elements.length; index++) {
        const a = elements[index][0];
        const b = elements[index][1];

        console.log(a % b == 0 ? 0 :  b - (a % b))
    }
}

var i = 0;
var inputs = 0;
var elements = [];

const pushInArray = (line) => {
    const items = line.split(' ');
    items.forEach(element => Number.parseInt(element));
    elements.push(items)
}

readline.on('line', line => {
    if (i == 0) {
        inputs = line;
        i++;
    } else {
        if (i == inputs) {
            pushInArray(line);
            readline.close(), divisibilityProblem(elements);
        } else {
            i++
            pushInArray(line);
        }
    }
});