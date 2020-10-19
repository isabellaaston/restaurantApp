const Item = require('./Item')

describe("Item", () => {
    test("item has description", () => {
        const item = new Item("Pasta Puttanesca", 12)
        expect(item.description).toBe("Pasta Puttanesca")
    })
    test("item has price", () => {
        const item = new Item("Pasta Puttanesca", 12)
        expect(item.price).toBe(12)
    })
})