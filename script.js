// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt the user for password criteria

  
// Define the sets of characters that can be used to build the password
  

// Define an array to hold all the possible characters that can be used to build the password


// Generate the random password by selecting characters from the passwordChars array


// Return the generated password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);