var app = angular.module("goodsDetailApp", []);
app.controller("goodsDetailCtrl", function ($scope, $rootScope, $location) {
  $scope.init = function () {
    $scope.goodsID = $location.search().goodsID;
    $scope.downUrl = "/uploadDownload/downloadImage";
    $scope.queryGoodsDetail()
  }
  $scope.queryGoodsDetail = function () {
    $.ajax({
      url: "/queryGoodsDetail",
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

  //点击立即购买
  $scope.buy = function () {
    $.ajax({
      url: "/getUserInfo",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          if (data.userName == "" || data.userName == null) {
            top.location.href = "../../login/login.html"
          } else {
            window.location.href = "../../order/createOrder/createOrder.html?goodsID=" + $scope.goodsID
          }
        })
      },
      error: function (data) {

      }
    })

  }

})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);