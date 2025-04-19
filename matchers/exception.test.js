function compileCode() {
    throw new Error('compile error')
}

describe("throw exception", () => {
    it('compiling goes as expected', () => {
        expect(() => compileCode()).toThrow('compile error')
    })
})
