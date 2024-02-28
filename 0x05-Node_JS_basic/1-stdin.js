process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
  const input = data.trim();
  if (input !== '') {
    process.stdout.write(`Your name is: ${input}\n`);
  } else {
    process.stdout.write('Your name cannot be empty. Please enter your name.\n');
  }
});

process.on('exit', function() {
  process.stdout.write('This important software is now closing\n');
});
