app.factory('employeeFactory', ['$http', function ($http) {

    let urlBase = 'http://localhost:3000/employees';
    let employeeFactory = {};

    employeeFactory.getEmployees = function () {
        return $http.get(urlBase);
    };

    employeeFactory.getEmployee = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    employeeFactory.addEmployee = function (employee) {
        return $http.post(urlBase, employee);
    };

    employeeFactory.updateEmployee = function (employee) {
        return $http.put(urlBase + '/' + employee.id, employee)
    };

    employeeFactory.deleteEmployee = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return employeeFactory;
}]);