/**
 * Created by Administrator on 2017/1/16.
 */
;
(function (angular) {
	'use strict';

	var module = angular.module('moviecat.movie_details',
		['ngRoute','moviecat.services.http'])

	//配置模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/details/:id', {
			templateUrl: 'movie_details/view.html',
			controller: 'MovieDetailsController'
		});
	}])

	module.controller('MovieDetailsController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function ($scope,$route,$routeParams,HttpService,AppConfig) {
			$scope.movie=[];
			$scope.movie.title='Loading...';
			$scope.loading=true;

			var id=$routeParams.id;
			var apiAddress=AppConfig.detailApiAddress+id;
			//跨域方式
			HttpService.jsonp(apiAddress,{}, function (data) {
				$scope.movie=data;
				$scope.loading=false;
				$scope.$apply();
			})
		}]);

})(angular);
