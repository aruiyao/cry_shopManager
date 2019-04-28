var app = angular.module("productManageListApp", []);
app.controller("productManageListCtrl", function ($scope, $rootScope) {
  $scope.imgName = "";
  $scope.init = function () {
    $scope.getGoodsList()
  }

  $scope.getGoodsList = function () {
    var req = {
      id: $scope.goodsId,
      goodsName: $scope.goodsName,
      goodsStatus: $scope.goodsStatus
    }
    var reg = new RegExp("^[0-9]*$");
    if ($scope.goodsId != null && $scope.goodsId != '' && !reg.test($scope.goodsId)) {
      req.id = -1;
    }
    $.ajax({
      url: "/manage/getGoodsList",
      type: "GET",
      contentType: "application/json",
      data: req,
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
    window.location.href = "../detail/productManage_detail.html?goodsID=" + id;
  }
  $scope.edit = function (id) {
    window.location.href = "../edit/productManage_edit.html?goodsID=" + id;
  }
  $scope.create = function () {
    window.location.href = "../create/productManage_create.html"
  }

  $scope.changeStatus = function (id, status) {
    var req = {
      id: id,
      goodsStatus: status
    }
    $.ajax({
      url: "/manage/updateGoods",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(req),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          if (status == "0") {
            $scope.modalTitle = "下架商品"
            $scope.modalContent = "下架成功"
          }
          if (status == "1") {
            $scope.modalTitle = "上架商品"
            $scope.modalContent = "上架成功"
          }
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.delete = function (id) {
    var req = {
      id: id,
    }
    $.ajax({
      url: "/manage/deleteGoods",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(id),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.modalTitle = "删除商品"
          $scope.modalContent = "删除成功"
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }

})
app.filter("newdate", function () {
  return function (date) {
    return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12)
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