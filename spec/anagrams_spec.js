const anagram = require("../lib/anagram")

describe("anagram", ()=> {

    it("should return [] when input is empty string", ()=> {
        expect(fibonacci()).toEqual([])
    })
    it("should return [a] when input is a", ()=> {
        expect(fibonacci("a")).toEqual(["a"])
    })
    it("should return [ab ba] when input is a,b", ()=> {
        expect(fibonacci("ab")).toEqual(["ab","ba"])
    })
    it("should return 6elements when input is abc", ()=> {
        expect(fibonacci("ab")).toEqual(["ab","ba"])
    })
})