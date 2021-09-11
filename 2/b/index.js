const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const equidistantString = (a, b) => {
    const sElements = a.toString().split('');
    const tElements = b.toString().split('');
    let pElements = [];
    let differentOnes = 0;

    for (let index = 0; index < sElements.length; index++) {
        if (sElements[index] != tElements[index]) {
            differentOnes++;
        }
    }

    if (differentOnes % 2 != 0) {
        return 'impossible';
    }

    for (let index = 0; index < sElements.length; index++) {
        if (sElements[index] == tElements[index]) {
            pElements.push(sElements[index]);
        } else {
            differentOnes % 2 === 0 ? pElements.push(sElements[index]) : pElements.push(tElements[index])
            differentOnes--;
        }
    }

    return pElements.join('');
}

var i = 0;
var s = ""
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            s = line;
            break;
        case 1:
        default:
            readline.close(), console.log(equidistantString(s, line));
            break;
    }
});