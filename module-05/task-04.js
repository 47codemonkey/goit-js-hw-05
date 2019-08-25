"use strict";

class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append(symbol) {
        this._value = this._value + symbol;
    }

    prepend(symbol) {
        this._value = symbol + this._value;
    }

    pad(symbol) {
        this._value = symbol + this._value + symbol;
    }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);