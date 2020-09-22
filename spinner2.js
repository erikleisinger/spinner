const newChar = function () {
  let delay = 0;
  return (char) => {
    setTimeout(() => {
      process.stdout.write(`\r    ${char}    `);
    }, delay);
    delay += 300;
  };
};

const printNew = newChar();
printNew('|');
printNew('/');
printNew('-');
printNew('\\');
printNew('|');