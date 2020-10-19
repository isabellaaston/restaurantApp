class Menu {
    constructor(title) {
        this.title = title
        this.items = []
    }

    addItem(...item) {
        this.items.push(...item)
    }
    
    removeItem(item) {
        let itemIndex = this.items.indexOf(item)
        this.items.splice(itemIndex, 1)
    }
}

module.exports = Menu