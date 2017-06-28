/**
 * Created by Radu.Gheorghescu on 6/28/2017.
 */
angular.module('hrApp').controller('DescriptionController', ['$rootScope','$scope', function($rootScope, $scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'views/childscope.html';
    $scope.buttonText = 'Show Description';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };

    $scope.toggleDescriptionShow = function () {
        if($scope.descriptionShow == false) {
            $scope.buttonText = 'Hide Description';
            $scope.descriptionShow = true;
        }else {
            $scope.buttonText = 'Show Description';
            $scope.descriptionShow = false
        }

    }
}]);
