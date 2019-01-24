var app = angular.module("productManageEditApp", []);
app.controller("productManageEditCtrl", function ($scope, $rootScope, $location) {
  $scope.mainPicture = "";
  $scope.init = function () {
    $scope.goodsID = $location.search().goodsID;
    $scope.downUrl = "/manage/uploadDownload/downloadImage";
    $scope.detailPicture = "";
    $scope.detailPicList = [];
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
            $scope.detailPicList = data.detailPicture.split("|");
          } else {
            $scope.detailPicList = [];
          }
          $scope.detailPicture = data.detailPicture;
          $scope.mainPicture = data.mainPicture;
          $scope.goodsName = data.goodsName;
          $scope.goodsPrice = data.goodsPrice;
          $scope.goodsStatus = data.goodsStatus;
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.uploadImage = function () {
    var uploadUrl = "/manage/uploadDownload/uploadImage";
    var pic = $('#upload_file')[0].files[0];
    var fd = new FormData();
    //fd.append('uploadFile', pic); 
    fd.append('file', pic);
    $.ajax({
      url: uploadUrl,
      type: "post",
      // Form数据 
      data: fd,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        $rootScope.$apply(function () {
          console.log("the data is : {}", data);
          if (data !== "") {
            $scope.mainPicture = data;
          }
        })
      }
    });
  }

  $scope.uploadMultpie = function () {
    var uploadUrl = "/manage/uploadDownload/uploadMultpie";
    var fileList = [];
    var pics = $('#upload_file_multiple')[0];
    for (let i = 0; i < pics.files.length; i++) {
      fileList.push(pics.files[i]);
    }
    var formData = new FormData();
    fileList.forEach(function (file) {
      formData.append('files', file, file.name);
    })
    $.ajax({
      url: uploadUrl,
      type: "post",
      // Form数据 
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.detailPicList = [];
          if (data && data.length > 0) {
            $scope.detailPicList = data;
            for (var i = 0; i < data.length; i++) {
              $scope.detailPicture = $scope.detailPicture + data[i] + "|";
            }
            $scope.detailPicture = $scope.detailPicture.substr(0, $scope.detailPicture.length - 1);
          }
        })
      }
    });
  }

  $scope.updateGoods = function () {
    var req = {
      id: $scope.goodsID,
      goodsName: $scope.goodsName,
      goodsPrice: $scope.goodsPrice,
      mainPicture: $scope.mainPicture,
      detailPicture: $scope.detailPicture,
      goodsStatus: $scope.goodsStatus
    }
    $.ajax({
      url: "/manage/updateGoods",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(req),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.detail = function (id) {
    window.location.href = "/view/goods/detail/goodsDetail.html?goodsID=" + id;
  }
  $scope.sure = function () {
    window.location.href = "../list/productManage_list.html"
  }
  $scope.cancle = function () {
    window.location.href = "../list/productManage_list.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);