app.factory('HumanFactory', function() {
  var Human = function(name, hairColor) {
    this.name = name;
    this.hair = hairColor;
    this.cars = [];
  }

  Human.prototype.changeHair = function (newColor) {
    this.hair = newColor;
  }

  Human.prototype.addCar = function (carMake, carModel, carColor) {
    this.cars.push(carCreator(carMake, carModel, carColor));
  }

  function carCreator(carMake, carModel, carColor) {
    return {
      make: carMake,
      model: carModel,
      color: carColor
    }
  }


  return Human;
})