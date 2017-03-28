angular.module("CateModule",["ngRoute","me-lazyload","partModule"])
.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/cateagory",{
		templateUrl:"components/cateagory/cateagory.html",
		css:"components/cateagory/cateagory.css",
		controller:"CateagoryCtrl"
	})
}])
.service("cateagoryData",["$http",function($http){
	this.get=function(){
		return $http.get("json/full2.json");
	}
}])
.controller("CateagoryCtrl",["$scope","cateagoryData","$rootScope",function($scope,cateagoryData,$rootScope){
	cateagoryData.get().success(function(res){
		var data=res.data;
//		console.log(data);
		$scope.pageClass = 'page-home';
		$scope.allcateagory="全部分类";
		$scope.allsort="综合排序"
		$scope.cateagoryTypeArr=data.categories;
 		$scope.i=0;
		$scope.pro=data.products["104749"];
		$scope.borderid="104749";
		var k='104749';
		$scope.getpro=function(obj,sort){
			$scope.i=Number(sort);
			$scope.borderid=obj;
			$scope.pro=data.products[obj];
//			console.log($scope.pro);
			k=obj;
//			$scope.childcid=childcid;
	}
		$scope.getitem=function(){
			$scope.expand=!$scope.expand;
			$scope.expendFifter1=!$scope.expendFifter1;
			$scope.expendFifter2=false;
			$scope.expandsort=false;
			$scope.expandsub=!$scope.expandsub;
			$scope.isshow=!$scope.isshow;
		}
		$scope.getsort=function(){
			$scope.expand=!$scope.expand;
			$scope.expendFifter2=!$scope.expendFifter2;
			$scope.expendFifter1=false;
			$scope.expandsort=!$scope.expandsort;
			$scope.expandsub=false;
			$scope.isshow=!$scope.isshow;
		}
		var catearr=[];
		$scope.changeCate=function(name){
			$scope.allcateagory=name;
//			$scope.allsort=name;
			if(name=="全部分类"){
				$scope.pro=data.products[k];
				return;
			}
			
			catearr=[];
			//双向数据绑定 $scope.pro值已经修改 需要重置之前的
			$scope.pro=data.products[k];
			for(var i=0;i<$scope.pro.length;i++){
				var childcid=$scope.pro[i].child_cid;
				if(name==$scope.pro[i].cids[childcid]){	
					catearr.push($scope.pro[i]);
				}
			}
			$scope.pro=catearr;
		}
		$scope.sort=function(orderBy,event){
			//把当前显示的商品价格 数量转为数字
			$scope.allsort=event;
			for(var i=0;i<$scope.pro.length;i++){
				$scope.pro[i].price=Number($scope.pro[i].price);
				$scope.pro[i].product_num=Number($scope.pro[i].product_num);
			}
			$scope.orderBy=orderBy;
		}
		$scope.change=function(obj){
			$rootScope.shopObj=obj;
		}
	})
	
}])
