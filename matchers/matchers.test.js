describe("truthy or falsy", () => {
    it('null', () => {
        expect(null).toBeFalsy()
        expect(null).not.toBeTruthy()
        expect(null).toBeNull()
    })
})
