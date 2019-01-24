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

  $scope.detail = function(id) {
    window.location.href = "../detail/productManage_detail.html?goodsID=" + id;
  }
  $scope.edit = function(id) {
    window.location.href = "../edit/productManage_edit.html?goodsID=" + id;
  }
  $scope.create = function () {
    window.location.href = "../create/productManage_create.html"
  }
})
app.filter("newdate",function(){
  return function(date){
    return date.substring(0,4)+"-"+date.substring(4,6)+"-"+date.substring(6,8)+" "+date.substring(8,10)+":"+date.substring(10,12)+":"+date.substring(12)
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