// A function that prints out some argument in STDOUT

function displayMessage (message) {
    process.stdout.write(message + '\n');
};

module.exports = displayMessage;