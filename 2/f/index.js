const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const fXORinacci = (inputs, elements) => {
  let output = '';

  for (let index = 0; index < inputs; index++) {
    const a = elements[index][0];
    const b = elements[index][1];
    const n = elements[index][2];

    if (n % 3 == 0) {
      output += a;
    } else if (n % 3 == 1) {
      output += b;
    } else {
      output += (a ^ b);
    }
    index + 1 < inputs ? output += '\n' : null;
  }

  return output;
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
      readline.close(), console.log(fXORinacci(inputs, elements));
    } else {
      i++
      pushInArray(line);
    }
  }
});