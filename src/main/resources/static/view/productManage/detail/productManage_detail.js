var app = angular.module("productManageDetailApp", []);
app.controller("productManageDetailCtrl", function ($scope, $rootScope, $location) {
  $scope.mainPicture = "";
  $scope.init = function () {
    $scope.goodsID = $location.search().goodsID;
    $scope.downUrl = "/manage/uploadDownload/downloadImage";
    $scope.queryGoodsDetail();
  }

  $scope.queryGoodsDetail = function () {
    $.ajax({
      url: "/manage/queryGoodsDetail",
      type: "GET",
      contentType: "application/json",
      data: {
        id: $scope.goodsID,
      },
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          if (data.detailPicture) {
            $scope.detailPic = data.detailPicture.split("|");
          } else {
            $scope.detailPic = [];
          }

          $scope.goods = data;
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.goBack = function () {
    window.location.href = "../list/productManage_list.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);