var app = angular.module("productManageCreateApp", []);
app.controller("productManageCreateCtrl", function($scope, $rootScope) {
  $scope.mainPicture = "";
  $scope.init = function() {
    $scope.downUrl = "/manage/uploadDownload/downloadImage";
    $scope.detailPicture = "";
    $scope.detailPicList = [];
  }

  $scope.uploadImage = function() {
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
      success: function(data) {
        $rootScope.$apply(function() {
          console.log("the data is : {}", data);
          if (data !== "") {
            $scope.mainPicture = data;
            console.log("上传成功后的文件路径为：" + data);
            $scope.imgUrl = $scope.downUrl + "?imageName=" + data;
          }
        })
      }
    });
  }

  $scope.uploadMultpie = function() {
    var uploadUrl = "/manage/uploadDownload/uploadMultpie";
    var fileList = [];
    var pics = $('#upload_file_multiple')[0];
    for (let i = 0; i < pics.files.length; i++) {
      fileList.push(pics.files[i]);
    }
    var formData = new FormData();
    fileList.forEach(function(file) {
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
      success: function(data) {
        $rootScope.$apply(function() {
          if (data && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              $scope.detailPicture = $scope.detailPicture + data[i] + "|";
              $scope.detailPicList.push($scope.downUrl + "?imageName=" + data[i])
            }
            $scope.detailPicture = $scope.detailPicture.substr(0, $scope.detailPicture.length - 1)
          }
        })
      }
    });
  }

  $scope.dateTimeFormate = function() {
    var obj = {};
    var d = new Date();
    obj.year = d.getFullYear();
    obj.month = ('0' + (d.getMonth() + 1)).slice(-2);
    obj.day = ('0' + (d.getDate())).slice(-2);
    obj.hour = ('0' + (d.getHours())).slice(-2);
    obj.minutes = ('0' + (d.getMinutes())).slice(-2);
    obj.seconds = ('0' + (d.getSeconds())).slice(-2);
    return obj
  }
  $scope.create = function() {
    var date = $scope.dateTimeFormate();
    var req = {
      goodsName: $scope.goodsName,
      goodsPrice: $scope.goodsPrice,
      mainPicture: $scope.mainPicture,
      detailPicture: $scope.detailPicture,
      createTime: date.year + date.year + date.month + date.day + date.hour + date.minutes + date.seconds
    }
    $.ajax({
      url: "/manage/createGoods",
      type: "POST",
      contentType: "application/json",
      data:JSON.stringify(req),
      // dataType: "json",
      success: function(data) {
        $rootScope.$apply(function() {
          $scope.goodsList = data.goodsList;
        })
      },
      error: function(data) {

      }
    })
  }
  $scope.detail = function(id) {
    window.location.href = "/view/goods/detail/goodsDetail.html?goodsID=" + id;
  }
})


app.directive('repeatFinish', function() {
  return {
    link: function(scope, element, attr) {
      if (scope.$last == true) {
        scope.$emit('renderFinish');
      }
    }
  }
})