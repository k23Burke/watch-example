app.controller('MainController', ($scope, HumanFactory, PeopleService, $timeout) => {
  $scope.number = 0;
  $scope.message = "This is a message to all y'all";
  PeopleService.build().then(function(people) {
    console.log('PEOPLE', people);
    console.log('SERVICE', PeopleService.people)
    $scope.men = PeopleService.people;
  console.log('$scope.men AFTER', $scope.men);

  })

  console.log('$scope.men', $scope.men);

  // var man = new ManFactory('Guy', 'brown', 3);
  // man.addCar('Chevy', 'Malibu', 'Orange');
  // man.addCar('Honda', 'Accord', 'Steel');

  // $timeout(() => {
  //   man.addCar('Honda', 'Accord', 'Steel');
  // }, 1000);

  // $scope.men.push(man)

  // $scope.addCar = function () {
  //   man.addCar('Honda', 'Accord', 'Steel');
  // }
})