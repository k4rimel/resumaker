(function(){
	'use strict';

	angular
		.module('cvBuilder')
		.controller('CvController', CvController);

	function CvController(Cv, User) {
		var resume = this;
		resume.user = {};
		resume.data = {};

		resume.getData = function(userId) {
		  	Cv.getLocal('cv').then(function(data) {
				if (!utils.isEmpty(data)) {
					if(!data.hasOwnProperty('title')) {
						data["title"] = "Unnamed resume";
					}
					console.log(data);
			    	resume.data = data;
				};
		  	});
		}
		resume.getUser = function() {
			User.getLocal('user').then(function(user) {
				if (!utils.isEmpty(user)) {
					console.log(user);
			    	resume.user = user;
		  			resume.getData(resume.user.id);
				};
		  	});
		}
	  	resume.update = function($event, obj) {
	  		console.log(obj);
		   	var data = $event.target;
		   	// var data = $event.target.value;
		   	console.log(data);
		   	Cv.save(data).then(function(response) {
		   		console.log(response);
		   	});
		}
		resume.delete = function($event) {
			var data = $event.target.value;
		};
		resume.init = function() {
			resume.getUser();
		};
		// resume.orderIncrement = function(blockKey, sectionKey blockTabLength) {
		// 	console.log('inc');
		// 	resume.data.sections['$$hashKey']
		// 	if(block.sequence < blockTabLength) {
		// 		console.log(block.sequence);
		// 		block.sequence++;
		// 		console.log(block.sequence);
		// 	}
		// };
		// resume.orderDecrement = function(blockKey, sectionKey) {
		// 	console.log('dec');
		// 	console.log(block);
		// 	if(block.sequence > 1) {
		// 		console.log(block.sequence);
		// 		block.sequence = block.sequence -1;
		// 		console.log(block.sequence);
		// 	}
		// };
		// resume.findByHashKey = function(obj, hKey) {
		// 	for (var i = obj.length - 1; i >= 0; i--) {
		// 		if(obj[i].hasOwnProperty('$$hashKey')) {
		// 			obj[i]['$$hashKey'] = hKey;
		// 		}
		// 	};
		// };
	  	
	  	resume.init();
	  	resume.save = function($event) {
		   	var data = $event.target.value;
		   	Cv.save(data);
		}
	}
})();
