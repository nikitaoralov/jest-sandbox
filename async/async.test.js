const fetchData = require('./async')

beforeAll(() => {
    console.log('before all')
})

beforeEach(() => {
    console.log('before each')
})

afterEach(() => {
    console.log('after each')
})

it('should return correct todo', () => {
    fetchData(1).then((todo) => {
        expect(todo.id).toBe(1)
    })
})

it('should return correct todo', async () => {
    const todo = await fetchData(1)
    expect(todo.id).toBe(1)
})