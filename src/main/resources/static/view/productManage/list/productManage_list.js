var app = angular.module("productManageListApp", []);
app.controller("productManageListCtrl", function ($scope, $rootScope) {
  $scope.imgName = "";
  $scope.init = function () {
    $scope.getGoodsList()
  }

  $scope.getGoodsList = function () {
    $.ajax({
      url: "/manage/getGoodsList",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.goodsList = data.goodsList;
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.detail = function (id) {
    window.location.href = "/view/goods/detail/goodsDetail.html?goodsID=" + id;
  }
  $scope.create = function () {
    window.location.href = "../create/productManage_create.html"
  }
})


app.directive('repeatFinish', function () {
  return {
    link: function (scope, element, attr) {
      if (scope.$last == true) {
        scope.$emit('renderFinish');
      }
    }
  }
})