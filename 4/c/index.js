const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const busVideoSystem = (firstLine, secondLine) => {
    const firstLineElements = firstLine.toString().split(' ');
    const secondLineElements = secondLine.toString().split(' ');
    const w = Number(firstLineElements[1]);
    let count = 0;
    let minimum = 0;
    let maximum = 0;
    let output = 0;

    for (let index = 0; index < secondLineElements.length; index++) {
        const element = Number(secondLineElements[index]);
        count += element;
        minimum = count < minimum ? count : minimum;
        maximum = count > maximum ? count : maximum;
    }

    output = w - maximum + minimum + 1;

    if(output < 0 || output > w + 1) {
        return 0;
    }

    return output
}

var i = 0;
var nw = ""
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            nw = line;
            break;
        case 1:
        default:
            readline.close(), console.log(busVideoSystem(nw, line));
            break;
    }
});