class Car {
  constructor(name, color, speed, price) {
    console.log("Constructor");
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.price = price;
  }

  fullInfo() {
    console.log("Car brand", this.name);
    console.log("Car color", this.color);
    console.log("Car speed", this.speed);
    console.log("Car price", this.price);
  }
}

const car = new Car("BMW", "Red", "200mph", 10000);
const car1 = new Car("Toyota", "White", "180kmph", 800);

car.fullInfo();
