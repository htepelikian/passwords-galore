// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variable arrays
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Functions for different password options
function questions() {
    var isValid = false;
    do {
      var length = prompt("Please choose password length between 8 and 128 characters");
      var askUpperCase = confirm("Please click OK to include upper case letters in your password");
      var askLowerCase = confirm("Please click OK to include lower case letters in your password");
      var askNumbers = confirm("Please click OK to include numbers in your password");
      var askSpecialChar = confirm("Please click OK to include special characters in your password");
      var responses = {
        length: length,
        askNumbers: askNumbers,
        askLowerCase: askLowerCase,
        askUpperCase: askUpperCase,
        askSpecialChar: askSpecialChar
      } 

      if((length < 8)||(length > 128))
      alert("Choose number between 8 and 128");
      else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecialChar))
      alert("Must choose at least one type.");
      else
      isValid = true;
  
    } while(!isValid);
      return responses;
  }
// Function to combine all confirmed options
function generatePassword() {
    var passwordOptions = questions();
    var possibleCombo = [];
    var finalPassword = "";
}
    
if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
}
if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
}
if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
}
if (passwordOptions.askSpecialChar) {
    for (var i of specialChar)
      possibleCombo.push(i);
}


console.log(possibleCombo);

for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
}
