const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const redBlueShuffle = (inputs, elements) => {
    for (let index = 0; index < inputs; index++) {
        let redCount = 0;
        let blueCount = 0;

        const red = elements[index][1];
        const blue = elements[index][2];

        const reds = red.toString().split('');
        const blues = blue.toString().split('');

        for (let i = 0; i < reds.length; ++i) {
            if (Number(reds[i]) > Number(blues[i])) {
                redCount++;
            } else if (Number(blues[i]) > Number(reds[i])) {
                blueCount++;
            }
        }

        if (redCount === blueCount) {
            if (index == inputs - 1) {
                return 'EQUAL'
            } else {
                console.log('EQUAL')
            }
        } else {
            if (index == inputs - 1) {
                return redCount > blueCount ? 'RED' : 'BLUE'
            } else {
                console.log(redCount > blueCount ? 'RED' : 'BLUE')
            }
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
        if (i == inputs * 3) {
            elements.push(line);
            readline.close(), console.log(redBlueShuffle(inputs, chunk(elements, 3)));
        } else {
            i++
            elements.push(line);
        }
    }
});