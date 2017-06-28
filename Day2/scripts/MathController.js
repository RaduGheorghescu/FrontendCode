/**
 * Created by Radu.Gheorghescu on 6/28/2017.
 */
angular.module('hrApp').controller('MathController',['$rootScope','$scope', function($rootScope,$scope){
    $scope.doMath = function () {
        var mathSelect = $scope.mathSelect;
        var numberA = $scope.numberA;
        var numberB = $scope.numberB;
        switch (mathSelect) {
            case "1":
                $scope.result = numberA + numberB;
                break;
            case "2":
                $scope.result = numberA - numberB;
                break;
            case "3":
                $scope.result = numberA * numberB;
                break;
            case "4":
                $scope.result = numberA / numberB;
                break;
        }
    }
}]);