const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const passCheck = (pass) => {
    const letters = pass.toString().split('');
    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const digit = new RegExp("(?=.*[0-9])");

    if (letters.length > 4 && lowerCase.test(pass) && upperCase.test(pass) && digit.test(pass)) {
        return 'Correct'
    } else {
        return 'Too weak'
    }
}

readline.on('line', line => {
    readline.close(), console.log(passCheck(line));
});