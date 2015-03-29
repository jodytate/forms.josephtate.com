(function(){
  'use strict';

  _.mixin(s.exports());

  angular.module('wordsApp', [])

  .controller('WordsController', function ($scope) {

    $scope.words = '';

    $scope.mangle = function (value) {
      $scope.reversed = value.split('').reverse().join('');
      $scope.uppercase = value.toUpperCase();
      $scope.echo = _.repeat(value, 3);
      $scope.spaceless = value.replace(/\s+/g, '');
    };

  });

})();
