app.controller('dangkynhaphocController', ['$scope', '$http', function ($scope, $http) {
    $scope.dsdangky = [];

    let urlBase = 'http://localhost:3000/students';

    function layRaDanhSach() {
        return $http.get(urlBase);
    }

    function layRaSinhVienTheoID(id) {
        return $http.get(urlBase + '/' + id);
    }

    layRaDanhSach()
        .then(function($response) {
            $scope.dsdangky = $response.data;
        }, function (error) {
            $scope.status = error.statusText;
        })

}]);