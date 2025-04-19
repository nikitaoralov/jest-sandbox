describe("truthy or falsy", () => {
    it('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeLessThan(5)
    })

    it('adding floats', () => {
        expect(0.1 + 0.2).toBeCloseTo(0.299)
    })
})
