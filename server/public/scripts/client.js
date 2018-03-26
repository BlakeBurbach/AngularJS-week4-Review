const MyApp = angular.module('MyApp', []);

MyApp.controller('ReviewController', ['$http', function($http){

    let self = this;
    self.arrayOfPeople = [];


    self.addPerson = function(newPerson){
        $http({
            method: "POST",
            url: "/people",
            data: newPerson
        }).then(function(response){
            console.log('POST response', response);
            self.getPeople();
        }).catch(function(error){
            console.log('POST error', error);
        });
    }

    self.getPeople = function(){
        $http({
            method: "GET",
            url: "/people"
        }).then(function(response){
            console.log('GET response', response);
            self.arrayOfPeople = response.data;
        }).catch(function(error){
            console.log('GET error', error);
        })
    }
    self.getPeople();
}]);