const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const wayTooLongWords = (elements) => {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index].split("");
        if(element.length > 10) {
            console.log(`${element[0]}${element.length - 2}${element[element.length - 1]}`)
        } else {
            console.log(elements[index]);
        }
        
    }
}

var i = 0;
var inputs = 0;
var elements = [];

const pushInArray = (line) => {
    elements.push(line)
}

readline.on('line', line => {
    if (i == 0) {
        inputs = line;
        i++;
    } else {
        if (i == inputs) {
            pushInArray(line);
            readline.close(), wayTooLongWords(elements);
        } else {
            i++
            pushInArray(line);
        }
    }
});