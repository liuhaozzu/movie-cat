;
(function (angular) {
	'use strict';

	var module = angular.module('moviecat.movie_list',
		['ngRoute','moviecat.services.http'])

	//配置模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:category/:page?', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		});
	}])

	module.controller('MovieListController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function ($scope,$route,$routeParams,HttpService,AppConfig) {

			var count=AppConfig.pageSize;

			var page=parseInt($routeParams.page);//当前页码
			var start=(page-1)*count;//当前页从哪开始

			//1，设计暴露元素,2，设计暴露的行为
			//$scope.subjects=data;
			//测试$http
			//var doubanApiAddress='http://api.douban.com/v2/movie/'+$routeParams.category;
			$scope.title='Loading...';
			$scope.total=0;
			$scope.loading=true;

			$scope.totalPages=0;
			$scope.currentPage=page;

			HttpService.jsonp(AppConfig.listApiAddress+$routeParams.category, {
				start:start,
				count:count,
				//$routeParams的数据来源：现在路由后面找，
				// 如果没有再在：search/1?q={text}中的？后面找
				q:$routeParams.q
			},function (data) {
				//console.log(data);
				$scope.title=data.title;
				$scope.subjects=data.subjects;
				$scope.total=data.total;
				$scope.totalPages=Math.ceil($scope.total/count);
				//console.log($scope.subjects);
				//$scope.$apply('subjects');
				$scope.loading=false;
				//$scope.$apply('loading');
				$scope.$apply();

			});

			//暴露行为
			$scope.go= function (page) {
				//更新路由参数上的page值
				//这里要做合法校验
				if(page>=1 && page<=$scope.totalPages){
					$route.updateParams({page:page});
				}
			};














			//在angular中使用JSONP的方式做跨域请求，就必须给当前的地址加上一个参数，
			//callback=JSON_CALLBACK
			//参数名无所谓，但参数值必须固定为：JSON_CALLBACK
			//豆瓣api不支持以下跨域方式。
			/*$http.jsonp(doubanApiAddress+'?callback=JSON_CALLBACK').then(function (res) {
				console.log(res);

				console.log(typeof res);
				console.log(toString.call(res));

				if(200==res.status){
					$scope.subjects=res.data.subjects;
				}else{
					$scope.message='获取数据错误:'+res.statusText;
				}
			}, function (err) {
				console.log(err);
				$scope.message='获取数据错误:'+err.statusText;
			});*/
		}]);

})(angular);
