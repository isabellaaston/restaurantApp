const Item = require('./Item')
const Menu = require('./Menu')

describe("menu", () => {
    test("menu has title", () => {
        const menu = new Menu("Brunch Menu")
        expect(menu.title).toBe("Brunch Menu")
    })
    test("menu has items", () => {
        const menu = new Menu("Brunch Menu")
        const item = new Item("Eggs Royale", 9)
        menu.addItem(item)
        expect(menu.items.length).toBe(1)
    })
    test("can remove items from menu", () => {
        const menu = new Menu("Brunch Menu")
        const item1 = new Item("Eggs Royale", 9)
        const item2 = new Item("Chorizo Hash", 7)
        menu.addItem(item1, item2)
        menu.removeItem(item1)
        expect(menu.items.length).toBe(1)
    })
})