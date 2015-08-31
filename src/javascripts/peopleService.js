app.service('PeopleService', function($q, HumanFactory) {

  var PeopleService = this;

  PeopleService.build = function() {
    var deferred = $q.defer();
    getPeople().then(function(peopleList) {
      PeopleService.people = peopleList;
      deferred.resolve(PeopleService.people);
    });
    return deferred.promise;
  }


  //fake getting a list of people
  function getPeople() {
    var deferred = $q.defer();
    var data = [{
      'name':'Guy Man',
      'hair':'brown',
      'cars': []
    },
    {
      'name':'Miss Lady',
      'hair':'black',
      'cars': []
    }];
    var finalData = []
    data.forEach(function(person){
      var newOne = new HumanFactory(person.name, person.hair);
      finalData.push(newOne);
    });
    deferred.resolve(finalData);
    return deferred.promise;
  }

  return PeopleService;

});