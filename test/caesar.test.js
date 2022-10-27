// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar - input value errors", () =>{
    it("should return false if shift value isnt present", () =>{
        const message = "jiggle"
        const actual = caesar(message)
        expect(actual).to.be.false
    })
    it("should return false if shift value is equal to 0", () =>{
        const message = "jiggle"
        const actual = caesar(message,0)
        expect(actual).to.be.false
    })
    it("should return false if shift value is less than -25", () =>{
        const message = "jiggle"
        const actual = caesar(message,-42)
        expect(actual).to.be.false
    })
    it("should return false if shift value is greater than 25", () =>{
        const message = "jiggle"
        const actual = caesar(message,42)
        expect(actual).to.be.false
    })
    
})

describe("caesar - encoding a message", () =>{
    it("should encode and shift as expected", () =>{
        const message = "jiggle"
        const actual = caesar(message,5)
        const expected = "onllqj"

        expect(actual).to.equal(expected)
    })
    it("should encode while maintaining spaces and other nonalphabetic symbols", () =>{
        const message = "my jiggle!"
        const actual = caesar(message,5)
        const expected = "rd onllqj!"

        expect(actual).to.equal(expected)
    })
    it("should encode with capital letters ignored", () =>{
        const message = "JiGGle"
        const actual = caesar(message,5)
        const expected = "onllqj"

        expect(actual).to.equal(expected)
    })
    it("should encode as expected when a letter is shifted 'off' the alphabet (ex: a shift of 5 on 'z' should become 'e')", () =>{
        const message = "jigglz"
        const actual = caesar(message,5)
        const expected = "onllqe"

        expect(actual).to.equal(expected)
    })
})

describe("caesar - decoding a message", () =>{
    it("should decode and shift as expected", () =>{
        const message = "onllqj"
        const actual = caesar(message,5,false)
        const expected = "jiggle"

        expect(actual).to.equal(expected)
    })
    it("should decode while maintaining spaces and other nonalphabetic symbols", () =>{
        const message = "rd onllqj!"
        const actual = caesar(message,5,false)
        const expected = "my jiggle!"

        expect(actual).to.equal(expected)
    })
    it("should decode with capital letters ignored", () =>{
        const message = "OnLLqj"
        const actual = caesar(message,5,false)
        const expected = "jiggle"

        expect(actual).to.equal(expected)
    })
    it("should decode as expected when a letter is shifted 'off' the alphabet (ex: a shift of 3 on 'z' should become 'c')", () =>{
        const message = "onllqe"
        const actual = caesar(message,5,false)
        const expected = "jigglz"

        expect(actual).to.equal(expected)
    })
})

