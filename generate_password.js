function generatePassword(length = 12) {
// Typed out all of the characters needed to make the password
    const characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_"

    // Made a new empty string
let password = '';

// Adds twelve characters into password
for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
}
return password

}

module.exports = generatePassword;