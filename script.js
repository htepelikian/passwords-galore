// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array's for different password options (number, upper case, lower case, special characters)
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", ];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ];

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var choices = [];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Prompts user to add a value, alerts if correct value is not added
  while (true) {
    var firstPrompt = prompt("How long would you like your password to be? Choose between 8 to 128 characters.");
    if (!firstPrompt) {
      alert("Please add a value");
    } else if (firstPrompt < 8 || firstPrompt > 128) {
      prompt("Please add a value higher than 8 or lower than 128");
    } else {
      break;
    }
  }

  // Asks user to confirm what kind of conditions they would like their password to include
  if (confirm("Press OK to include numbers")) {
    choices = choices.concat(number);
  }
  if (confirm("Press OK to include special characters")) {
    choices = choices.concat(specialChar);
  }
  if (confirm("Press OK to include upper case letters")) {
    choices = choices.concat(upperCase);
  }
  if (confirm("Press OK to include lower case letters")) {
    choices = choices.concat(lowerCase);
  }
  // Alerts user to enter correct value / criteria
  if (choices.length == 0) {
    alert("Please choose a criteria");
  }

  // New empty password generator
  var randomPassword = [];
  // For loop code
  for (var i = 0; i < firstPrompt; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);