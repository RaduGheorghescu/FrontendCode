/**
 * Created by Radu.Gheorghescu on 6/29/2017.
 */
hrApp.controller('UserViewController', ['$scope', '$http', '$location', 'userServices',
    function ($scope, $http, $location, $userServices) {
        $scope.user = {};
        $scope.showHide = false;
        $scope.back = function() {
            $location.url('/');
        }
        
        $scope.reset = function () {
            $scope.user = angular.copy();
        }
        $scope.save = function () {
            $userServices.push($scope.user);
            $scope.reset();
        }
        $scope.show = function () {
            if ($scope.showHide == false) {
                $scope.showHide = true;
                $scope.users = $userServices;
            }else {
                $scope.showHide = false;
            }
        }
}]);