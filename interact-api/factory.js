app.factory('employeeFactory', ['$http', function ($http) {

    let urlBase = 'http://localhost:3000/employees';
    let employeeFactory = {};

    employeeFactory.getEmployees = function () {
        return $http.get(urlBase);
    };

    employeeFactory.getEmployee = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    employeeFactory.addEmployee = function (cust) {
        return $http.post(urlBase, cust);
    };

    employeeFactory.updateEmployee = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    employeeFactory.deleteEmployee = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return employeeFactory;
}]);