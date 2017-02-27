/**
 * Created by Administrator on 2017/1/15.
 */
;(function (angular) {
	angular.module('moviecat.directives.auto_focus',[])
		.directive('autoFocus',['$location', function ($location) {
			//var path=$location.path();
			return {
				restrict:'A',
				link: function ($scope, iElm, iAttrs, controller) {

					$scope.$location=$location;
					$scope.$watch('$location.path()',function (now) {
						//execute when path changed
						var aLink=iElm.children().attr('href');
						//console.log(aLink);
						var type=aLink.replace(/#(\/.+?)\/\d+/,'$1');
						//console.log(path+'::'+type);
						if(now.startsWith(type)){
							iElm.parent().children().removeClass('active');
							//访问的是当前链接
							iElm.addClass('active');
						}
					});


					/*console.log($scope);
					console.log(iElm);
					console.log(iAttrs);
					console.log(controller);*/
					/*iElm.on('click', function () {
						//console.log(this);
					 	iElm.parent().children().removeClass('active');
						iElm.addClass('active');
						window.iele=iElm;
					});*/
				}
			}
		}]);
})(angular);
