const brand = Symbol('brand');
const motor = Symbol('motor');
const color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[brand] = brand;
    this[motor] = motor;
    this[color] = color;
  }

  cloneCar() {
    const newCar = new Car();
    newCar[brand] = this[brand];
    newCar[motor] = this[motor];
    newCar[color] = this[color];
    return newCar;
  }
}

export default Car;
