// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let output = ""
    let alphaTrue = "abcdefghijklmnopqrstuvwxyz"
    let inputLow = input.toLowerCase()
    let alphaSet = new Set(alphabet)
    if(!alphabet || alphabet.length != 26 || alphaSet.size != 26 ){        return false
    }
    let alphaLow = alphabet.toLowerCase()
    
    if(encode === true){
      for(let i = 0; i < inputLow.length ; i++){
        let ePos = alphaTrue.indexOf(inputLow[i])
        let encodeLetter = ""
        if (ePos === -1){
          encodeLetter = input[i]
        } else {
          encodeLetter = alphaLow[ePos]
        }
        output += encodeLetter
      }
    }
    if(encode === false){ 
      for(let i = 0; i < inputLow.length ; i++){
        let dPos = alphaLow.indexOf(inputLow[i])
        let decodeLetter = ""
        if (dPos === -1){
          decodeLetter = input[i]
        } else {
          decodeLetter = alphaTrue[dPos]
        }
      output += decodeLetter
      }
    }  
    return output
  } 

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
