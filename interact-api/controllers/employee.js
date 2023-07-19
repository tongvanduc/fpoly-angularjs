app.controller('employeeController', ['$scope', 'employeeFactory', function ($scope, employeeFactory) {

    $scope.status = null;
    $scope.employees = null;
    $scope.employee = {};

    $scope.getEmployees = function () {
        employeeFactory.getEmployees()
            .then(function (response) {
                $scope.status = response.status;
                $scope.employees = response.data;
            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.statusText;
            });
    }

    $scope.getEmployees();

    $scope.addEmployee = function () {
        employeeFactory.addEmployee($scope.employee)
            .then(function (response) {
                $scope.status = response.status;
                $scope.employees.push($scope.employee);
            }, function (error) {
                $scope.status = 'Unable to insert employee: ' + error.statusText;
            });
    };

    $scope.getEmployee = function (id) {
        employeeFactory.getEmployee(id)
            .then(function (response) {
                response.data.salary = Number(response.data.salary);
                $scope.employee = response.data;
            }, function (error) {
                $scope.status = 'Unable to insert employee: ' + error.statusText;
            });
    };

    $scope.updateEmployee = function (id) {
        employeeFactory.updateEmployee($scope.employee)
            .then(function (response) {
                $scope.status = response.status;
            }, function (error) {
                $scope.status = 'Unable to insert employee: ' + error.statusText;
            });
    };

    $scope.deleteEmployee = function (id) {
        employeeFactory.deleteEmployee(id)
            .then(function (response) {
                $scope.status = response.status;

                for (let i = 0; i < $scope.employees.length; i++) {
                    let employee = $scope.employees[i];
                    
                    if (employee.id === id) {
                        $scope.employees.splice(i, 1);
                        break;
                    }
                }
            }, function (error) {
                $scope.status = 'Unable to insert employee: ' + error.statusText;
            });
    };
}]);