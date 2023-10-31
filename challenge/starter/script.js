// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];   

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// var userInput = prompt("Enter a number that signifies the length of password");
// var userInputInt = parseInt(userInput)
// console.log(typeof(userInputInt))

// if (userInputInt >= 8 && userInputInt <=128){
//   var confirmUpperCase = confirm("Do you want to include upper case letters in your password")
//   var confirmLowerCase = confirm("Do you want to include lower case letters in your password")
//   var confirmNumeric = confirm("Do you want to include numbers in your password")
//   var confirmSpecialChar = confirm("Do you want to include special characters in your password")
//   console.log(confirmSpecialChar)

//   var pass = ""
//   var gen = ""

//   function myPassword(upperCase,lowerCase,numbers,special){
//     if (confirmUpperCase) {
//       // pass = pass+=upperCase.join()
//       for (var i=0; i<upperCase.length; i++){
//         pass+=upperCase[i]
//       }
//     }
//     if (confirmLowerCase) {
//       // pass+=lowerCase.join()
//       for (var i=0; i<lowerCase.length; i++){
//         pass+=lowerCase[i]
//       }
//     }
//     if (confirmNumeric) {
//       // pass+=numbers.join()
//       for (var i=0; i<numbers.length; i++){
//         pass+=numbers[i]
//       }
//     }
//     if (confirmSpecialChar) {
//       // pass+=special.join()
//       for (var i=0; i<special.length; i++){
//         pass+=special[i]
//       }
//     }
//   }
//   myPassword(upperCasedCharacters,lowerCasedCharacters,numericCharacters,specialCharacters)

//   console.log(typeof(pass))
//   console.log(pass)

// for (var i=0; (i<=userInputInt-1); i++){
//   var passIndex = Math.floor(Math.random()*pass.length)
//   gen+=pass[passIndex]
  
// }
// console.log(gen)

// // var passWd = pass[passIndex]
// // console.log(passWd)
// }

// else{alert("Enter a number from 8 to 128")}


// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var userInput = prompt("Enter a number that signifies the length of password");
var userInputInt = parseInt(userInput)
console.log(typeof(userInputInt))

  if (userInputInt >= 8 && userInputInt <=128){
    var confirmUpperCase = confirm("Do you want to include upper case letters in your password")
    var confirmLowerCase = confirm("Do you want to include lower case letters in your password")
    var confirmNumeric = confirm("Do you want to include numbers in your password")
    var confirmSpecialChar = confirm("Do you want to include special characters in your password")
    console.log(confirmSpecialChar)
  
    var pass = ""
    var gen = ""
  
    function myPassword(upperCase,lowerCase,numbers,special){
      if (confirmUpperCase) {
        // pass = pass+=upperCase.join()
        for (var i=0; i<upperCase.length; i++){
          pass+=upperCase[i]
        }
      }
      if (confirmLowerCase) {
        pass+=lowerCase.join("")
        // for (var i=0; i<lowerCase.length; i++){
        //   pass+=lowerCase[i]
        //}
      }
      if (confirmNumeric) {
        // pass+=numbers.join()
        for (var i=0; i<numbers.length; i++){
          pass+=numbers[i]
        }
      }
      if (confirmSpecialChar) {
        // pass+=special.join()
        for (var i=0; i<special.length; i++){
          pass+=special[i]
        }
      }
    }
    myPassword(upperCasedCharacters,lowerCasedCharacters,numericCharacters,specialCharacters)
  
    console.log(typeof(pass))
    console.log(pass)
  
  for (var i=0; (i<=userInputInt-1); i++){
    var passIndex = Math.floor(Math.random()*pass.length)
    gen+=pass[passIndex]
    
  }
  
  console.log(gen)
  return gen
  
  // var passWd = pass[passIndex]
  // console.log(passWd)
  }
  
  else{alert("Enter a number from 8 to 128")}

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);