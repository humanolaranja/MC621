const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const fakeNews = (string) => {
    const elements = string.split('');
    const answer = ['h', 'e', 'i', 'd', 'i'];
    let currentMatch = 0;
    
    for (let index = 0; index < elements.length; index++) {
        if(currentMatch === 5) {
            break;
        }
        const element = elements[index];
        if(element === answer[currentMatch]) {
            currentMatch++;
        }
    }
    console.log(currentMatch === 5 ? 'YES' : 'NO');
}

readline.on('line', line => {
    readline.close(), fakeNews(String(line));
});