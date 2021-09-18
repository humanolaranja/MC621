const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const subtractions = (elements) => {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        let a = Number(element[0]);
        let b = Number(element[1]);
        let count = 0;

        while (a > 0 && b > 0) {
            if (a > b) { 
                count += Math.trunc(a / b);
                a -= Math.trunc((a / b)) * b; 
            }
            else { 
                count += Math.trunc(b / a);
                b -= Math.trunc((b / a)) * a;
            }
        }
        console.log(count)
    }
    return;
}

var i = 0;
var inputs = 0;
var elements = [];

const pushInArray = (line) => {
    const items = line.toString().split(' ');
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
            readline.close(), subtractions(elements);
        } else {
            i++
            pushInArray(line);
        }
    }
});