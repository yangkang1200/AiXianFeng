angular.module('MineModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/mine',{
		templateUrl:'components/mine/mine.html',
		controller:'MineCtrl',
		css:'components/mine/mine.css'
	})
}])
.controller('MineCtrl',['$scope',function($scope){
	$scope.pageClass = 'page-contact';
}])
