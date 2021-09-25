const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const removeDuplicates = (elements) => {
    const noDuplicates = [...new Set(elements.reverse())];
    console.log(noDuplicates.length);
    console.log(noDuplicates.reverse().join(' '));
}

var i = 0;
var elements = [];

const pushInArray = (line) => {
    const items = line.toString().split(' ');
    items.forEach(element => Number(element));
    elements.push(items)
}

readline.on('line', line => {
    if (i == 0) {
        i++;
    } else {
        pushInArray(line);
        readline.close(), removeDuplicates(elements[0]);
    }
});