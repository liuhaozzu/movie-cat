;(function (angular) {
	'use strict';
	//由于默认angular提供的异步请求对象，不支持自定义回调函数名。
	//angular随机分配的回调函数名，豆瓣又不支持。
	var http = angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$window','$document', function ($window,$document) {
		//console.log($document);
		this.jsonp= function (url,data,callback) {
			//将data转换成字符串的形式
			var queryStr=url.indexOf('?')==-1?'?':'&';
			for(var key in data){
				queryStr+=key+'='+data[key]+'&';
			}
			//处理url地址中的回调参数
			var cbFuncName='my_json_cb_'+Math.random().toString().replace('.','');
			//挂载回调函数,不建议放在这里
			//$window[cbFuncName]=callback;

			queryStr+='callback='+cbFuncName;
			//创建script标签
			var scriptEle=$document[0].createElement('script');
			scriptEle.src=url+queryStr;
			//注意此时还不能将原素挂载到DOM上，因为回调函数可能还没有实现，除非已经实现了回调函数


			//window[cbFuncName]=callback;
			$window[cbFuncName]= function (data) {
				callback(data);
				$document[0].body.removeChild(scriptEle);
			}
			//将script标签放回页面中
			$document[0].body.appendChild(scriptEle);
			//append后，页面会自动向页面发送请求。
		};
		//$window.$jsonp=jsonp;
	}])
})(angular);
