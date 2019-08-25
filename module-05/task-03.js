"use strict";

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
]);

const items = storage.getItems();
console.log(items);

storage.addItem("Дроид");
console.log(storage.items);

storage.removeItem("Пролонгер");
console.log(storage.items);