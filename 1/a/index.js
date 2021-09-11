const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const isAlmostLucky = (number) => {
    let almostLucky = false;
    for (let i = 1; i <= number; i++) {
        const elements = i.toString().split('');
        let valid = new Array(elements.length).fill(false);
        for (let j = 0; j < elements.length; j++) {
            if (elements[j] == '4' || elements[j] == '7') {
                valid[j] = true;
            }
        }

        if (valid.every((elem) => elem == true)) {
            let divided = number / i;
            if (divided % 1 === 0) {
                almostLucky = true;
                break;
            }
        }
    }
    return almostLucky ? 'YES' : 'NO';
}

readline.on('line', line => {
    readline.close(), console.log(isAlmostLucky(line));
});