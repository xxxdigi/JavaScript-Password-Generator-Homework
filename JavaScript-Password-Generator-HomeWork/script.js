var generateBtn = document.querySelector("#generate");

var selectLowerCase;
var selectUpperCase;
var selectSpecial;

var plength = 0
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var specialCharacter = "!#$@%^&*()_+=-':;<,>.?/~`";
var userPassword = "";
var passwordGroup = "";

function writePassword() {
  var password = generatePassword(String);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); 

while (isNaN(plength)) {
  var plength = parsenInt(promt("Enter Number of Characters."));
}

while (plength < 8 || plength > 128) {
  var plength = parseInt(prompt("Enter Length of Password."));
}

var selectLowerCase = confirm("Use lower case letters?");
var selectUpperCase = confirm("Use upper case letters?");
var selectNumber = confirm("Use number?");
var selectSpecial = confirm("Use special characters?");

geratePassword();

document.gerElementbyId("password").innerHTML = userPassword;
function generatePassword() {
  if (selectLowerCase) {
  passwordGroup += lowerCase;
  }
  if (selectUpperCase) {
  passwordGroup += upperCase;
  }
  if (selectNumber) {
  passwordGroup += numbers;
  }
  if (selectSpecial) {
  passwordGroup += specialCharacter;
  }
  for (let i = 0; i < plength; i++) {
    userPassword += passwordGroup.charAt(
    Math.floor(Math.random() * passwordGroup.length)
    );
  }
  return userPassword;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}