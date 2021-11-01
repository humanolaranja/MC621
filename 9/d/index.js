const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const antipalindrome = (string) => {
    const elements = string.split('');
    if (elements.every(elem => elem == elements[0])) {
        console.log(0);
    } else {
        if(isPalindrom(string)) {
            console.log(elements.length -1)
        } else {
            console.log(elements.length);
        }
    }
}

const isPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}

readline.on('line', line => {
    readline.close(), antipalindrome(line);
});