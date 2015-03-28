(function(){
	'use strict';

	angular
		.module('cvBuilder')
		.factory('Cv', CvFactory);

	function CvFactory($http, $q) {
		var factory = {};
		factory.cv = {};
		factory.response;

		function makeGetRequest(url) {
      		var deferred = $q.defer();
      		$http.get(url).then(function(resp) {
  		  		deferred.resolve(resp.data);
      		});
			return deferred.promise;
    	};		
    	function makePostRequest(url) {
      		var deferred = $q.defer();
      		$http.post(url).then(function(resp) {
  		  		deferred.resolve(resp.data);
      		});
			return deferred.promise;
    	};
  		factory.buildBlockOject = function() {
  			return {
  				id:id,
  				title:title,
  				content:content,
  				sequence:sequence,
  				parent_id:id
  			};
  		}
  		factory.save = function(data) {
  			var dataObj = {
  				"cvId" : data,
  				"block" : data.block
  			};
  			factory.response = makePostRequest('/CvManager/updateBlock', dataObj);
  			return factory.response;
  		}
        factory.get = function(userId) {
            factory.cv = makeGetRequest('/CvManager/getCv?userId='+userId);
            return factory.cv;
        };		
        factory.getLocal = function(dataType) {
        	factory.cv = makeGetRequest('/data/'+dataType+'.json');
			return factory.cv;
		};

		return factory;
	}
})();