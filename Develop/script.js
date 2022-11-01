// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassoword() {

  var userInput = window.prompt("How long do you want your passowrd to be?")

  var passowrdLength = parseInt(userInput)

  if (isNaN(passowrdLength)) {
    window.alert("Thats not a number!")
    return
  }

  if (passowrdLength < 8 || passowrdLength > 128) {

    window.alert("Password length must be between 8 and 128 charachters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your Passoword?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your passoword?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your Password?")

  var numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbollist = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}

var optionscart = []

for (var i = 0; i < lowercaselist.lenght; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true) {
  optionscart.push(numberslist)

}

if (userWantsSymbols === true) {
  optionscart.push(symbollist)
}

if (userWantsLowercase === true) {
  optionscart.push(lowercaseList)
}

if (userWantsUppercase === true) {
  optionscart.push(uppercaseList)
}

var generate = ""

for (var i = 0; i < passwordLenght; i++) {

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
