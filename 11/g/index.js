const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const team = (elements) => {
    let output = 0;
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const a = Number(element[0]);
        const b = Number(element[1]);
        const c = Number(element[2]);
        if (a + b + c >= 2) {
            output++
        }
    }
    console.log(output);
}

var i = 0;
var inputs = 0;
var elements = [];

const pushInArray = (line) => {
    const items = line.toString().split(' ');
    elements.push(items);
}

readline.on('line', line => {
    if (i == 0) {
        inputs = line;
        i++;
    } else {
        if (i == inputs) {
            pushInArray(line);
            readline.close(), team(elements);
        } else {
            i++
            pushInArray(line);
        }
    }
});