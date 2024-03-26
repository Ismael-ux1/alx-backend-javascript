import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, color); // Call the parent constructor with brand and color

    this._motor = motor;
    this._range = range;
  }

  // Getter methods for private attributes (optional)
  get motor() {
    return this._motor;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Return a new Car instance with only brand and color
    return new Car(this.brand, this.color);
  }
}

export default EVCar;
