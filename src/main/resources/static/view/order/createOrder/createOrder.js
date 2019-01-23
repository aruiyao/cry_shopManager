var app = angular.module("createOrderApp", []);
app.controller("createOrderCtrl", function ($scope, $rootScope, $location) {
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
          $scope.goods = data;
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.submitOrder = function () {
    $.ajax({
      url: "/getUserInfo",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          //未登录
          if (data.userName == "" || data.userName == null) {
            top.location.href = "../../login/login.html";
          } else {
            var req = {
              goodsId: $scope.goods.id,
              userId: data.id,
              userName: data.userName,
              goodsName: $scope.goods.goodsName,
              mainPicture: $scope.goods.mainPicture,
              address: $scope.address,
              leaveWord: $scope.leaveWord,
              number: 1,
              totalPrice: $scope.goods.goodsPrice
            }
            $.ajax({
              url: "/createOrder",
              type: "POST",
              contentType: "application/json",
              data: JSON.stringify(req),
              // dataType: "json",
              success: function (result) {
                $rootScope.$apply(function () {
                  $('#myModal').modal()
                })
              },
              error: function (result) {
        
              }
            })
          }
        })
      },
      error: function (data) {

      }
    })
    
  }
  $scope.sure = function () {
    window.location.href="../../goodsList/goodsList.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);