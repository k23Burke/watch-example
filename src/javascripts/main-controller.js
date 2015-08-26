app.controller('MainController', function ($scope, ManFactory, $timeout) {
  $scope.number = 0;
  $scope.message = "This is a message to all y'all";
  $scope.men = [];

  var man = new ManFactory('Guy', 'brown', 3);
  man.addCar('Chevy', 'Malibu', 'Orange');
  man.addCar('Honda', 'Accord', 'Steel');

  $timeout(function () {
    man.addCar('Honda', 'Accord', 'Steel');
  }, 1000);


  $scope.men.push(man)
})