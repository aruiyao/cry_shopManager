var app = angular.module("indexApp", []);
app.controller("indexCtrl", function ($scope, $rootScope) {

  $scope.changeFrameHeight = function () {
    var ifm = document.getElementById("iframepage");
    ifm.height = document.documentElement.clientHeight;
    ifm.width = document.documentElement.clientWidth - 202;
  }

  window.onresize = function () {
    $scope.changeFrameHeight();
  }
  $scope.init = function () {
    $scope.userName = "";
    $scope.pageUrl = "../userManage/list/userManage_list.html";
    $scope.menulist = [{
        "name": "商品管理",
        "url": "../productManage/list/productManage_list.html"
      },
      {
        "name": "订单管理",
        "url": "../orderManage/list/orderManage_list.html"
      },
    ]
    $scope.chooseMenu(0);
    $.ajax({
      url: "/manage/getUserInfo",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          if (data.userName === "" || data.userName === null) {
            top.location.href = "../login/login.html"
          } else {
            $scope.userName = data.userName
          }
        })
      },
      error: function (data) {

      }
    })
  };

  $scope.chooseMenu = function (index) {
    $scope.menuIndex = index;
    $scope.pageUrl = $scope.menulist[index].url
    $("#iframepage").attr("src", $scope.pageUrl);
  }

  $scope.logout = function () {
    $.ajax({
      url: "/manage/logout",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          top.location.reload()
        })
      },
      error: function (data) {

      }
    })
  }

})