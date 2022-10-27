// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

//UHWIQZTXJYRLGEAODVPBCNFMSK
//My Jiggle     gs yjttlq

describe("substitution - error handling", () => {
    it("should return false if the substitution alphabet is missing", () =>{
        const message = "jiggle"
        const actual = substitution(message)
        expect(actual).to.be.false
    })
    it("should return false if the substitution alphabet is not exactly 26 characters", () =>{
        const message = "jiggle"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMSKZ"
        const actual = substitution(message,alphabet)
        expect(actual).to.be.false
    })
    it("should return false if the substitution alphabet does not contain unique characters", () =>{
        const message = "jiggle"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMSS"
        const actual = substitution(message,alphabet)
        expect(actual).to.be.false
    })
})

describe("substitution - encoding a message", () => {
    it("should encode - happy path", () =>{
        const message = "jiggle"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMSK"
        const actual = substitution(message,alphabet)
        const expected = "yjttlq"
        expect(actual).to.equal(expected)
    })
    it("should work with any kind of key with unique characters", () =>{
        const message = "jigglez"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMS!"
        const actual = substitution(message,alphabet)
        const expected = "yjttlq!"
        expect(actual).to.equal(expected)
    })
    it("should preserve spaces", () =>{
        const message = "my jig gle"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMSK"
        const actual = substitution(message,alphabet)
        const expected = "gs yjt tlq"
        expect(actual).to.equal(expected)
    })

})

describe("substitution - decoding a message", () => {
    it("should decode - happy path", () =>{
        const message = "yjttlq"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMSK"
        const actual = substitution(message,alphabet,false)
        const expected = "jiggle"
        expect(actual).to.equal(expected)
    })
    it("should work with any kind of key with unique characters", () =>{
        const message = "yjttlq!"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMS!"
        const actual = substitution(message,alphabet,false)
        const expected = "jigglez"
        expect(actual).to.equal(expected)
    })
    it("should preserve spaces", () =>{
        const message = "gs yjttlq"
        const alphabet = "UHWIQZTXJYRLGEAODVPBCNFMSK"
        const actual = substitution(message,alphabet,false)
        const expected = "my jiggle"
        expect(actual).to.equal(expected)
    })
})