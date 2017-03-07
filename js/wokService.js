angular.module('wokStation').factory('WokService', function($http, $sce){
	var service = {
		getInstagramRecentPics: getInstagramRecentPics
	};	

	function recentInstagramMediaSuccess(response){
		return response.data;			
	}

	function recentInstagramMediaError(response){
		console.log("ERROR Fetching Recent Media Instagram" + response);
	}

	function getInstagramRecentPics(){
		
		var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=744911049.eeed5b2.67a3d49c3b0640568beb732268a55543&callback=JSON_CALLBACK";		
		$sce.trustAsResourceUrl(url);	
		return $http.jsonp(url).then(recentInstagramMediaSuccess, recentInstagramMediaError);
		/*	
		$http.jsonp(url).success(function successCallback(response){
			var data = response.data;			
			var mainIndex = 0;
			var index = 0;
			while (mainIndex < service.max_num_of_imgs) {
				if(index == data.length){
					index = 0;
				}
				var image = data[index].images.low_resolution.url;
				images.push(image);
				index++;
				mainIndex++;
			}	
		});	
		return images;	*/
	};

	return service
});