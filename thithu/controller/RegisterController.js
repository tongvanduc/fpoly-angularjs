app.controller('RegisterController', ['$scope', '$http', function ($scope, $http) {
    $scope.states = ['My Dinh', 'Cau Giay', 'Thanh Xuan'];

    let baseUrl = 'http://localhost:3000/users';

    $scope.them = function () {
        $scope.user.id = null;// Tránh lỗi trùng ID
        $http.post(baseUrl, $scope.user)
            .then((res) => alert('Thao tác thành công'), (err) => alert('Lỗi'));
    }

    $scope.sua = function (id) {
        let url = baseUrl + '/' + id;
        $http.put(url, $scope.user)
            .then((res) => alert('Thao tác thành công'), (err) => alert('Lỗi'));
    }

    let danhsach = function () {
        $http.get(baseUrl)
            .then((res) => $scope.users = res.data, (err) => alert('Lỗi'));
    }
    danhsach();

    $scope.xem = function (id) {
        let url = baseUrl + '/' + id;
        $http.get(url)
            .then((res) => $scope.user = res.data, (err) => alert('Lỗi'));
    }

    $scope.xoa = function (id) {
        if(confirm('Are you sure?')) {
            let url = baseUrl + '/' + id;
            $http.delete(url)
                .then((res) => alert('Thao tác thành công'), (err) => alert('Lỗi'));
        }
    }
}]);