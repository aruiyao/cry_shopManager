var app = angular.module("goodsListApp", []);
app.controller("goodsListCtrl", function ($scope, $rootScope) {
  $scope.imgName = "";
  $scope.init = function () {
    $scope.downUrl = "/uploadDownload/downloadImage"
    $scope.getGoodsList()
  }

  $scope.uploadImage = function () {
    //var uploadUrl = "http://localhost:8860/v1/uploadDownload/uploadImage"; 
    var uploadUrl = "/uploadDownload/uploadImage";
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
            $scope.imgName = data;
            console.log("上传成功后的文件路径为：" + data);
            $scope.imgUrl = $scope.downUrl + "?imageName=" + data;
          }
        })
      }
    });
  }

  $scope.uploadMultpie = function () {
    var uploadUrl = "/uploadDownload/uploadMultpie";
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
          console.log("the data is : {}", data);
          if (data !== "") {
            $scope.imgName = data;
            console.log("上传成功后的文件路径为：" + data);
            $scope.imgUrl = $scope.downUrl + "?imageName=" + data;
          }
        })
      }
    });
  }
  $scope.getGoodsList = function () {
    $.ajax({
      url: "/getGoodsList",
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