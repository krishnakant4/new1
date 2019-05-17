angular.module('application', []).controller('myCtrl', function ($scope) {
    console.log($scope);
    $scope.name = "";
    $scope.itemCol = [];
    $scope.addItem = function (evt) {
        if (evt.keyCode == 13) {
            $scope.itemCol.push($scope.name);
            $scope.name = "";
        }
        console.log(evt);
    };
});