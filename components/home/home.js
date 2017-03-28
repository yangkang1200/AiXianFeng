angular.module("HomeModule",["ngRoute"])
.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/home",{
		templateUrl:"components/home/home.html",
		css:"components/home/home.css",
		controller:"HomeCtrl"
	})
}])
.service("homeData",["$http",function($http){
	this.get=function(){
		return $http.get("json/3_Full.json")
		
	}
}])

.service("swiper",["$timeout",function($timeout){
	this.swiper=function(){
		$timeout(function(){
			new Swiper('.swiper-container', {
            loop: true,
            autoplay:3000,
            pagination: '.swiper-pagination',
            paginationClickable :true,
            loopAdditionalSlides:0,
            autoplayDisableOnInteraction: false
      });
		},50);
	}
}])

.controller("HomeCtrl",["$scope","homeData","swiper",function($scope,homeData,swiper){
	homeData.get().success(function(res){
		var arr=res.data.act_info;
		for(var i=0;i<arr.length;i++){
			var name=arr[i].type
			switch (name){
				case "focus":$scope.slideArr=arr[i].act_rows;
					break;
				case "icon":$scope.iconarr=arr[i].act_rows;
					break;
				case "brand":$scope.brandarr=arr[i].act_rows.slice(0,3);
					break;
				case "business" :$scope.bussarr=arr[i].act_rows;
					break;
				case "category" :$scope.cateagArr=arr[i].act_rows;
					break;
				default:
					break;
			}
		}
		
		
		
	})
		swiper.swiper();
	
}])
