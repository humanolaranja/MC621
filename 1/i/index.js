const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const luckySubstring  = (number) => {
    const fours = [];
    const sevens = [];

    const elements = number.toString().split('');

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];

        if(element == '4') {
            fours.push(element);
        }
        
        if(element == '7') {
            sevens.push(element);
        }
    }

    if(fours.length === 0 && sevens.length === 0) {
        return -1;
    }
    
    if(fours.length === sevens.length || fours.length > sevens.length) {
        return '4';
    }

    return '7';
}

readline.on('line', line => {
    readline.close(), console.log(luckySubstring(line));
});