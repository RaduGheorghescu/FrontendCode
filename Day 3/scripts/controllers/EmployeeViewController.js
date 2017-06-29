hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location',  'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        $scope.employee = {};

        $http.get(commonResourcesFactory.findOneEmployeeUrl+'/'+$routeParams.employeeid)
            .success(function (data, status, headers, confug) {
                $scope.employee = data;
            }).error(function (data, status, headers, confug) {
            alert("Error" +status);
        })


        $scope.back = function() {
            $location.url('/employeeslist');

        }

    }]);