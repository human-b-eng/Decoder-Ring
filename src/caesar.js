// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift < -25) return false
    const shiftCode = encode ? shift : -(shift)
    let inputLow = input.toLowerCase()
    let output = ""
    for (let i = 0; i < inputLow.length; i++) {
      let current = alpha.indexOf(inputLow[i])
      let newLetter
      if (current === -1) {
        newLetter = input[i]
      } else {
        let newPos = current + shiftCode
        if(newPos > 25) {
          newPos -= 26
        } else if (newPos < 0) {
          newPos += 26
        }
        newLetter = alpha[newPos]
      }
      output += newLetter
    } 
    return output
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
