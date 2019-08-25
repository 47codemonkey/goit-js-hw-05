"use strict";

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        console.log(
            `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${
        car._isOn
      }, distance: ${car._distance} и price: ${car._price}`
        );
    }
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({
        price,
        maxSpeed
    }) {
        this._speed = 0;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = false;
        this._distance = 0;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this._isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (this._speed + value <= this._maxSpeed) {
            this._speed = this._speed + value;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if (this._speed - value >= 0) {
            this._speed = value;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this._isOn === true) {
            this._distance = this._distance + hours * this._speed;
        }
    }
}

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);


mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);


console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);