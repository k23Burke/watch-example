app.factory('ManFactory', function() {
  var Man = function(name, hairColor, heightInFeet) {
    this.name = name;
    this.hair = hairColor;
    this.height = heightInFeet;
    this.cars = [];
  }

  Man.prototype.changeHair = function (newColor) {
    this.hair = newColor;
  }

  Man.prototype.addCar = function (carMake, carModel, carColor) {
    this.cars.push(carCreator(carMake, carModel, carColor));
  }

  function carCreator(carMake, carModel, carColor) {
    return {
      make: carMake,
      model: carModel,
      color: carColor
    }
  }


  return Man;
})