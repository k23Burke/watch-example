app.directive('showInfo', function (){
  var displayHTML = '<h5>{{man.name}} standing at {{man.height}} feet tall with {{man.hair}} hair</h5>'+
    '<h5>is the proud owner of {{man.cars.length}} cars</h5>';
  return {
    restrict: 'E',
    template: displayHTML,
    link: function (scope, element) {
      console.log(scope.men);
    }
  }
})