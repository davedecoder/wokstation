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
		
		var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=1699446928.9e50fe3.1ee3e0bd8fa9498a891db7ee18da5a7c&callback=JSON_CALLBACK";		
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