// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Prompt the user for password criteria
  var passwordLength = prompt("How many characters would you like your password to be? (Please choose a number between 8 and 128)");
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
  var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  var includeSymbols = confirm("Would you like to include symbols in your password?");
  
  // Define the sets of characters that can be used to build the password
  

  // Define an array to hold all the possible characters that can be used to build the password


  // Generate the random password by selecting characters from the passwordChars array


  // Return the generated password


  // Add event listener to generate button

}
generateBtn.addEventListener("click", writePassword);