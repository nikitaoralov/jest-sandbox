const sum = require('./basic')

describe("describe tests", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    it('object assignment', () => {
        expect({}).toEqual({})
    })
})
