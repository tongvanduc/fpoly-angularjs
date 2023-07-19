app.controller('employeesController', ['$scope', 'employeeFactory', function ($scope, employeeFactory) {

    $scope.status = null;
    $scope.employees = null;
    $scope.employee = {};

    getEmployees();

    function getEmployees() {
        employeeFactory.getEmployees()
            .then(function (response) {
                $scope.status = response.status;
                $scope.employees = response.data;
            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.message;
            });
    }

    $scope.addEmployee = function () {
        employeeFactory.addEmployee($scope.employee)
            .then(function (response) {
                $scope.status = response.status;
                $scope.employees.push(employee);
            }, function (error) {
                $scope.status = 'Unable to insert employee: ' + error.message;
            });
    };
}]);