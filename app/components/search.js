/**
 * Created by Administrator on 2017/1/15.
 */
;(function (angular) {
	angular.module('moviecat.directives.search',['ngRoute'])
		.directive('search',['$location','$route', function ($location,$route) {
			return {
				scope:{},//{}=isolate,true=child,false
				restrict:'AE',
				template:'<form class="navbar-form navbar-right" ng-submit="search()"><input type="text" class="form-control" placeholder="Search..." ng-model="text"></form>',
				replace:true,
				link: function ($scope,iElm,iAttrs,controller) {
					$scope.text='';
					$scope.search= function () {
						//console.log(iElm.text());

						$route.updateParams({category:'search',q:$scope.text})
					};
				},
			};
		}]);
})(angular);
