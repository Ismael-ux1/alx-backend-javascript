class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const symbolBrand = Symbol('brand');
    const symbolMotor = Symbol('motor');
    const symbolColor = Symbol('color');

    return new this.constructor({
      [symbolBrand]: this._brand,
      [symbolMotor]: this._motor,
      [symbolColor]: this._color,
    });
  }

  // Getters for controlled access to private properties
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}

export default Car;
