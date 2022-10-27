// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius - encoding a message", () => {
    it("should encode a messagae by translating each letter to number pairs", () =>{
        const message = "jiggle"
        const actual = polybius(message)
        const expected = "424222221351"
        expect(actual).to.equal(expected)
    })
    it("should translate both 'i' and 'j' to 42", () =>{
        const message = "jiggle"
        const actual = polybius(message)
        const expected = "424222221351"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is", () =>{
        const message = "my jiggle"
        const actual = polybius(message)
        const expected = "2345 424222221351"
        expect(actual).to.equal(expected)
    })
})

describe("polybius - decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () =>{
        const message = "424222221351"
        const actual = polybius(message, false)
        const expected = "(i/j)(i/j)ggle"

        expect(actual).to.equal(expected)
    })
    it("should translate 42 to both 'i' and 'j'", () =>{
        const message = "424222221351"
        const actual = polybius(message, false)
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    })
    it("should leave spaces as is", () =>{
        const message = "2345 424222221351"
        const actual = polybius(message, false)
        const expected = "my (i/j)(i/j)ggle"
        expect(actual).to.equal(expected)
    })
    it("should return false if the length of all decode numbers is odd", () =>{
        const message = "4242222213513"
        const actual = polybius(message, false)
        expect(actual).to.be.false
    })
})