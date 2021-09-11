const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const luckyTicket = (ticket) => {
    const elements = ticket.toString().split('');
    let valid = new Array(elements.length).fill(false);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] == '4' || elements[i] == '7') {
            valid[i] = true;
        }
    }

    if (!valid.every((elem) => elem == true)) {
        return 'NO'
    }

    const firstPartString = elements.splice(0, elements.length / 2);
    const secondPartString = elements.splice(0, elements.length);

    const firstPart = firstPartString.map(el => Number.parseFloat(el));
    const secondPart = secondPartString.map(el => Number.parseFloat(el));

   return firstPart.reduce((a, b) => a + b, 0) == secondPart.reduce((a, b) => a + b, 0) ? 'YES' : 'NO';
}

var i = 0;
readline.on('line', line => {
    if(i == 0) {
        i++
    } else {
        readline.close(), console.log(luckyTicket(line));
    }
});