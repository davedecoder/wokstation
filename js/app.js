
angular.module("wokStation", ['imageCropper']);


angular
.module('wokStation')
.controller('wokController', ['$scope', 'WokService', function($scope, WokService){
	var max_num_of_imgs = 8;
	$scope.instagramRecentMedia = [];

	$scope.getInstagramRecentPics = function(){		
		WokService.getInstagramRecentPics().then(function(response){
			var images = [];		
			var data = response.data;			
			var mainIndex = 0;
			var index = 0;
			while (mainIndex < max_num_of_imgs) {
				if(index == data.length){
					index = 0;
				}
				var image = {};
				image.url = data[index].images.low_resolution.url;
				images.push(image);
				index++;
				mainIndex++;
			}
			$scope.instagramRecentMedia = images;			
		});
	};

	$scope.getInstagramRecentPics();
}]);
