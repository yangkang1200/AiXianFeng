angular.module("partModule",["ngRoute"])
.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/part",{
		templateUrl:"components/cateagory/part/part.html",
		css:"components/cateagory/part/part.css",
		controller:"PartCtrl"
	})
}])
.controller("PartCtrl",["$scope","$rootScope",function($scope,$rootScope){
//	console.log($rootScope.shopObj)
	$scope.pageClass = 'page-about';
	var shopObj=$rootScope.shopObj
	$scope.name=shopObj.name;
	$scope.img=shopObj.img;
	$scope.desc=shopObj.long_name;
	$scope.spc=shopObj.price;
}])