app.controller('dangkynhaphocController', ['$scope', '$http', function ($scope, $http) {
    let urlBase = 'http://localhost:3000/students';

    function layRaDanhSach() {
        return $http.get(urlBase)
            .then(function ($response) {
                $scope.dsdangky = $response.data;
            }, function (error) {
                $scope.status = error.statusText;
            });
    }
    
    layRaDanhSach();

    $scope.layRaSinhVienTheoID = function (id) {
        $http.get(urlBase + '/' + id)
            .then(function ($response) {
                $scope.student = $response.data;
            }, function (error) {
                $scope.status = error.statusText;
            });
    }

    $scope.themSinhVien = function () {
        $http.post(urlBase, $scope.student)
            .then(function ($response) {
                alert('Tạo mới thành công')
            }, function (error) {
                alert('Tạo mới thất bại')
                $scope.status = error.statusText;
            });
    };

    $scope.suaSinhVien = function (id) {
        $http.put(urlBase + '/' + id, $scope.student)
            .then(function ($response) {
                alert('Sửa thành công')
            }, function (error) {
                alert('Sửa thất bại')
                $scope.status = error.statusText;
            });
    };

    $scope.xoaSinhVienTheoID = function (id) {
        if (confirm('Bạn có chắc chắn không')) {
            $http.delete(urlBase + '/' + id)
                .then(function ($response) {
                    alert('Xóa thành công')
                }, function (error) {
                    alert('Xóa thất bại')
                    $scope.status = error.statusText;
                });
        }
    }

}]);