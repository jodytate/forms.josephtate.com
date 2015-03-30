(function(){
  'use strict';

  _.mixin(s.exports());

  var randomize = function randomize (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  angular.module('wordsApp', [])

  .controller('WordsController', function ($scope) {

    $scope.words = '';

    $scope.otherWords = '';

    $scope.mangle = function mangle (value) {
    
      $scope.reversed = value.split('').reverse().join('');
      $scope.uppercase = value.toUpperCase();
      $scope.echo = _.repeat(value, 3);
      $scope.spaceless = value.replace(/\s+/g, '');

      var chopped = _.chop(value, 3);
      $scope.chopped = chopped.join(' ');

    };

    $scope.randomMangle = function randomMangle (value) {
    
      var reversed = value.split('').reverse().join('');
      var uppercase = value.toUpperCase();
      var echo = _.repeat(value, 3);
      var spaceless = value.replace(/\s+/g, '');

      $scope.random = randomize([reversed, uppercase, echo, spaceless]);
    
    };

  });

})();
