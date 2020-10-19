class Restaurant {
    constructor(name) {
        this.name = name
        this.menus = []
    }

    addMenu(...menu) {
        this.menus.push(...menu)
    }
    
    removeMenu(menu) {
        let menuIndex = this.menus.indexOf(menu)
        this.menus.splice(menuIndex, 1)
    }
}

module.exports = Restaurant