var app = angular.module("orderManageListApp", []);
app.controller("orderManageListCtrl", function ($scope, $rootScope) {
  $scope.init = function () {
    $scope.getOrderList();
  }

  $scope.getOrderList = function () {
    var req = {
      id: $scope.orderId,
    }
    var reg = new RegExp("^[0-9]*$");
    if ($scope.orderId != null && $scope.orderId != '' && !reg.test($scope.orderId)) {
      req.id = -1;
    }
    $.ajax({
      url: "/manage/queryOrderList",
      type: "GET",
      contentType: "application/json",
      data: req,
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.orderList = data.orderList;
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.delete = function (id) {
    var req = {
      id: id
    }
    $.ajax({
      url: "/manage/deleteOrder",
      type: "post",
      contentType: "application/json",
      data: JSON.stringify(req),
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.modalTitle = "删除订单";
          $scope.modalContent = "删除成功";
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.detail = function (id) {
    window.location.href = "../detail/orderManage_detail.html?orderID=" + id;
  }

})
app.filter("newdate", function () {
  return function (date) {
    return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12)
  }
})