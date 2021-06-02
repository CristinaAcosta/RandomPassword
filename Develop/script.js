// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
const specialCharacters = "!@#$%^&*()";
document.getElementById("generate") .addEventListener('click', generatePassword);




function generatePassword() {
  var passwordLength = prompt(" Enter number of characters for your password.  It must be more than 8 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var SpecialCharacters = confirm("Do you want special characters in your password?");
 
  var minimumCount = ""
  var minimumNumbers = ""
  var minimumLowerCases = ""
  var minimumUpperCases = ""
  var minimumSpecialCharacters = ""


  var functionArray = {

    
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)]
    }

};

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  
  var randomPasswordGenerated = "";

  
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    console.log (generatePassword)


    randomPasswordGenerated += randomNumberPicked;

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

 
  alert (randomPasswordGenerated);


  return






}



