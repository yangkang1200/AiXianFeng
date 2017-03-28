var app=angular.module("aixianfeng",["ngRoute","angularCSS","HomeModule","CateModule","MineModule"])
.config(["$routeProvider",function($routeProvider){
	$routeProvider.otherwise({redirectTo:"/home"})
}])