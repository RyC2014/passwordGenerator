var characterlength = 8;
var choiceArr = [];

// Character arrays
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Numbers to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lower case letters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Upper case letters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Prompt user to confirm how many characters they would like in their password



// Write password to the #password input
function writePassword() {


  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");


  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;




  } else {
    passwordText.value = '';


  }


}

function getPrompts() {
  choiceArr = []

  characterlength = parseInt(prompt('How many characters would you like your password to be? (8 - 118 characters'));

  if (isNaN(characterlength) || characterlength < 8 || characterlength > 118) {
    alert('Character length must be a number between 8 and 118 digits. Please try again');
    return false;


  }

  if (confirm("Would you like your password to contain lowercase letters?"))
    choiceArr = choiceArr.concat(lowerCasedCharacters)

  if (confirm("Would you like your password to contain uppercase letters?"))
    choiceArr = choiceArr.concat(upperCasedCharacters)

  if (confirm("Would you like your password to contain special characters"))
    choiceArr = choiceArr.concat(specialCharacters)

  if (confirm("Would you like your password to contain numbers?"))
    choiceArr = choiceArr.concat(numericCharacters)

  return true;

}



function generatePassword() {
  let password = '' //define empty string as a container
  for (let i = 0; i < characterlength; i++) {
    password += choiceArr[Math.floor(Math.random() * choiceArr.length)] //add generated character to the string
  }

  return password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);