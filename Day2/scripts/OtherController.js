/**
 * Created by Radu.Gheorghescu on 6/28/2017.
 */
angular.module('hrApp').controller("OtherController",['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.setTitle = function() {
        $scope.title = "alt titlu";
    }
}]);