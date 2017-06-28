/**
 * Created by Radu.Gheorghescu on 6/28/2017.
 */
angular.module('hrApp').controller('MenuController',['$rootScope','$scope', function($rootScope,$scope){
    $scope.demoActionList=[
        {
            label: "OtherScope",
            url: "views/childScope.html"
        },
        {
            label: "DemoMath",
            url: "views/demomath.html"
        }
    ];
}]);