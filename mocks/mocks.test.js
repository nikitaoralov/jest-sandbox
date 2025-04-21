const forEach = (items, callback) => {
    for (let i=0; i < items.length; i++) {
        callback(items[i])
    }
}

it('mock callback', () => {
    const mockCallback = jest.fn(x => x + 42)
    forEach([0,1], mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe(0)
})