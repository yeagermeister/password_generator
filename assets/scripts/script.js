
const specialCharacters = "!@#$%^&*()";
var randomPasswordGenerated = "";
var characerterSet = "";
var randomPasswordGenerated =""

//This catched the button click
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPasswordGenerated;
  //reseting the password variable in case the user runs the script again without refreshing
  randomPasswordGenerated = "";
}

//This section gets the user input.   The while loops force a correct number to be chosen before proceeding.  No validation is needed for 
//the remaining 4 parameters since we are using confirm instead of prompt 
function generatePassword() {
  let length = prompt("Please choose a password length between 8 and 128 characters.");

  while (length < 8) {
    length = prompt("Your password is too short!  Please choose a password length between 8 and 128 character.")
  }
  while (length > 128) {
    length = prompt("Your password is too long!  Please choose a password length between 8 and 128 character.")
  }

  let lower = confirm("Should lowercase charcters be used?  Press OK for Yes, or Cancel for No");
  let upper = confirm("Should uppercase charcters be used?  Press OK for Yes, or Cancel for No");
  let numbers = confirm("should numbers be used?  Press OK for Yes, or Cancel for No");
  let spec = confirm("Should special characters be used?  Press OK for Yes, or Cancel for No");


//Ensure that at least one character option was selected
if ((lower) || (upper) || (numbers) || (spec)) {

  // Loop through each character position
    while ((length) > 0 ) {

      // If the character type was chosen by the user, load the array with the randomly created character.
      let charactersArray = [];
      if (lower) {
        let temp = genLower();
        charactersArray.push(temp)
      };

      if (upper) {
        let temp = genUpper();
        charactersArray.push(temp)
      };

      if (numbers) {
        let temp = genNumeral();
        charactersArray.push(temp)
      };

      if (spec) {
        let temp = genSpec();
        charactersArray.push(temp)
      };

    // determine how many character options the user selected
    let arrayLength = charactersArray.length;

    //generate a random number between 0 and how many options the user picked
    let randomNumberPicked = Math.floor(Math.random() * arrayLength);

    // Use that random number to select which member of the array to set at that character location
    let characterSet = charactersArray[randomNumberPicked];
      randomPasswordGenerated += characterSet;

      // decrement to move to the next character postion
      length --;  
    };
    // loop ends
  }
  // send an error to the user if they didn't select a character type
  else alert("You must select at least one character type!  Please try again.")
  

  // Functions to generate the random characters
  // This returns a random lower case letter  -  String.fromCharCode(Math.floor(Math.random() * 26 + 97))
  // This returns a random upper case letter  -  String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  // This returns a random numeral between 0 and 9 - String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  function genLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  };

  function genUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  };
  
  function genNumeral() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  };

  function genSpec() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  };
}



