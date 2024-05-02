const generatePassword = require('generate-password');

// Create a function to generate random passwords
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,
        numbers: true
    });
    console.log('Generated Password:', password);
}

generateRandomPassword();