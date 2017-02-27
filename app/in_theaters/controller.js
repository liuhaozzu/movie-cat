;
(function (angular) {
	'use strict';
	/*var data=[
		{
			"rating": {
				"max": 10,
				"average": 6.8,
				"stars": "35",
				"min": 0
			},
			"genres": [
				"冒险",
				"科幻"
			],
			"title": "太空旅客",
			"casts": [
				{
					"alt": "https://movie.douban.com/celebrity/1022616/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/1358747052.41.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/1358747052.41.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/1358747052.41.jpg"
					},
					"name": "詹妮弗·劳伦斯",
					"id": "1022616"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1017967/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/1408271589.94.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/1408271589.94.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/1408271589.94.jpg"
					},
					"name": "克里斯·普拉特",
					"id": "1017967"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1004566/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/21073.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/21073.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/21073.jpg"
					},
					"name": "麦克·辛",
					"id": "1004566"
				}
			],
			"collect_count": 16925,
			"original_title": "Passengers",
			"subtype": "movie",
			"directors": [
				{
					"alt": "https://movie.douban.com/celebrity/1299674/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/38694.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/38694.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/38694.jpg"
					},
					"name": "莫滕·泰杜姆",
					"id": "1299674"
				}
			],
			"year": "2016",
			"images": {
				"small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2408209766.jpg",
				"large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408209766.jpg",
				"medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2408209766.jpg"
			},
			"alt": "https://movie.douban.com/subject/3434070/",
			"id": "3434070"
		},
		{
			"rating": {
				"max": 10,
				"average": 7.4,
				"stars": "40",
				"min": 0
			},
			"genres": [
				"动作",
				"科幻",
				"冒险"
			],
			"title": "星球大战外传：侠盗一号",
			"casts": [
				{
					"alt": "https://movie.douban.com/celebrity/1013981/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/42373.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/42373.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/42373.jpg"
					},
					"name": "菲丽希缇·琼斯",
					"id": "1013981"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1013867/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/36123.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/36123.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/36123.jpg"
					},
					"name": "迭戈·鲁纳",
					"id": "1013867"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1025194/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/10695.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/10695.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/10695.jpg"
					},
					"name": "甄子丹",
					"id": "1025194"
				}
			],
			"collect_count": 62673,
			"original_title": "Rogue One: A Star Wars Story",
			"subtype": "movie",
			"directors": [
				{
					"alt": "https://movie.douban.com/celebrity/1310557/",
					"avatars": {
						"small": "http://img3.doubanio.com/img/celebrity/small/1351661374.56.jpg",
						"large": "http://img3.doubanio.com/img/celebrity/large/1351661374.56.jpg",
						"medium": "http://img3.doubanio.com/img/celebrity/medium/1351661374.56.jpg"
					},
					"name": "加里斯·爱德华斯",
					"id": "1310557"
				}
			],
			"year": "2016",
			"images": {
				"small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2403049086.jpg",
				"large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2403049086.jpg",
				"medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2403049086.jpg"
			},
			"alt": "https://movie.douban.com/subject/25894431/",
			"id": "25894431"
		},
		{
			"rating": {
				"max": 10,
				"average": 6.3,
				"stars": "35",
				"min": 0
			},
			"genres": [
				"喜剧"
			],
			"title": "情圣",
			"casts": [
				{
					"alt": "https://movie.douban.com/celebrity/1274979/",
					"avatars": {
						"small": "http://img3.doubanio.com/img/celebrity/small/9489.jpg",
						"large": "http://img3.doubanio.com/img/celebrity/large/9489.jpg",
						"medium": "http://img3.doubanio.com/img/celebrity/medium/9489.jpg"
					},
					"name": "肖央",
					"id": "1274979"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1274496/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/37681.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/37681.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/37681.jpg"
					},
					"name": "闫妮",
					"id": "1274496"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1274081/",
					"avatars": {
						"small": "http://img3.doubanio.com/img/celebrity/small/6398.jpg",
						"large": "http://img3.doubanio.com/img/celebrity/large/6398.jpg",
						"medium": "http://img3.doubanio.com/img/celebrity/medium/6398.jpg"
					},
					"name": "小沈阳",
					"id": "1274081"
				}
			],
			"collect_count": 33945,
			"original_title": "情圣",
			"subtype": "movie",
			"directors": [
				{
					"alt": "https://movie.douban.com/celebrity/1325035/",
					"avatars": {
						"small": "http://img7.doubanio.com/img/celebrity/small/1353401566.43.jpg",
						"large": "http://img7.doubanio.com/img/celebrity/large/1353401566.43.jpg",
						"medium": "http://img7.doubanio.com/img/celebrity/medium/1353401566.43.jpg"
					},
					"name": "宋晓飞 ",
					"id": "1325035"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1364417/",
					"avatars": {
						"small": "http://img3.doubanio.com/img/celebrity/small/1480566101.36.jpg",
						"large": "http://img3.doubanio.com/img/celebrity/large/1480566101.36.jpg",
						"medium": "http://img3.doubanio.com/img/celebrity/medium/1480566101.36.jpg"
					},
					"name": "董旭",
					"id": "1364417"
				}
			],
			"year": "2016",
			"images": {
				"small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2409022364.jpg",
				"large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2409022364.jpg",
				"medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2409022364.jpg"
			},
			"alt": "https://movie.douban.com/subject/26879060/",
			"id": "26879060"
		}
	];*/

	var module = angular.module('moviecat.in_theaters',
		['ngRoute','moviecat.services.http'])

	//配置模块的路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/in_theaters/:page?', {
			templateUrl: 'in_theaters/view.html',
			controller: 'InTheatersController'
		});
	}])

	module.controller('InTheatersController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function ($scope,$route,$routeParams,HttpService) {

			var count=10;
			var page=parseInt($routeParams.page);//当前页码
			var start=(page-1)*count;//当前页从哪开始

			//1，设计暴露元素,2，设计暴露的行为
			//$scope.subjects=data;
			//测试$http
			var doubanApiAddress='http://api.douban.com/v2/movie/in_theaters';

			$scope.total=0;
			$scope.loading=true;

			$scope.totalPages=0;
			$scope.currentPage=page;

			HttpService.jsonp(doubanApiAddress, {
				start:start,
				count:count,
			},function (data) {
				console.log(data);
				$scope.title=data.title;
				$scope.subjects=data.subjects;
				$scope.total=data.total;
				$scope.totalPages=Math.ceil($scope.total/count);
				console.log($scope.subjects);
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
