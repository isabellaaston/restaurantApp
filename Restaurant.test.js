const { test, expect } = require('@jest/globals')
const Item = require('./Item')
const Menu = require('./Menu')
const Restaurant = require('./Restaurant')

describe("restaurant", () => {
    test("restaurant has name", () => {
        const restaurant = new Restaurant("Carbon")
        expect(restaurant.name).toBe("Carbon")
    })
    test("restaurant has menus", () => {
        const restaurant = new Restaurant("Carbon")
        const menu = new Menu("Brunch Menu")
        restaurant.addMenu(menu)
        expect(restaurant.menus.length).toBe(1)
    })
    test("can remove menus from restaurants", () => {
        const restaurant = new Restaurant("Carbon")
        const menu1 = new Menu("Brunch Menu")
        const menu2 = new Menu("Afternoon Tea")
        restaurant.addMenu(menu1, menu2)
        expect(restaurant.menus.length).toBe(2)
        restaurant.removeMenu(menu2)
        expect(restaurant.menus.length).toBe(1)
    })
        test("have a restaurant, with a menu, with items", () => {
            const restaurant = new Restaurant("Carbon")
            const menu = new Menu("Brunch Menu")
            const item = new Item("Eggs Royale")
            menu.addItem(item)
            restaurant.addMenu(menu)
            expect(restaurant.menus[0].items.length).toBe(1)
    })
})