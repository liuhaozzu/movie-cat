/**
 * Created by Administrator on 2017/2/28 0028 21:22.
 */
'use strict';

/**
 * 1, less: compile, compress, merge
 * 2, js merge compress mix
 * 3, copy img
 * 4, html compress
 */
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');
var mainBowerFiles=require('main-bower-files');
var browserSync=require('browser-sync');
//less 编译 压缩 合并(可以通过@import 语法进行合并)
gulp.task('styles',function () {
	//执行style任务时，自动执行
	gulp.src(['app/bower_components/**/*.min.css'])
		//.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/bower_components'))
		.pipe(browserSync.reload({
			stream:true
		}));//只需要设置导入的文件夹即可
});
//fonts: copy 字体图标
gulp.task('fonts',function () {
	//执行style任务时，自动执行
	gulp.src(mainBowerFiles({
		filter:'app/bower_components/**/*.{eot,svg,ttf,woff,woff2,otf}'
		}))
		.pipe(gulp.dest('dist/bower_components'))
		.pipe(browserSync.reload({
			stream:true
		}));//只需要设置导入的文件夹即可
});
//js 合并 压缩 混淆
gulp.task('scripts',function () {
	//执行style任务时，自动执行
	gulp.src(['app/bower_components/**/*.min.js'])
		//.pipe(concat('all.js'))//合并后的文件名
		.pipe(uglify())
		.pipe(gulp.dest('dist/bower_components'))
		.pipe(browserSync.reload({
			stream:true
		}));//只需要设置导入的文件夹即可
});
//img复制
/*gulp.task('images',function () {
	gulp.src('src/images/*.*')
		.pipe(gulp.dest('dist/images'))
		.pipe(browserSync.reload({
			stream:true
		}));
});*/
//html
/*gulp.task('app-index',function () {
	gulp.src('app/*.*')
		.pipe(htmlmin({
			collapseWhitespace:true,
			removeComments:true
		}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream:true
		}));
});*/

gulp.task('app',()=>{
	gulp.src(['!app/bower_components/**','app/*'])
		.pipe(gulp.dest('dist'));
});

gulp.task('serve',function () {
	browserSync({
		notify:false,
		port:3001,
		server:{
			baseDir:['dist/']
		}

	},function (err, bs) {
		console.log(bs.options.getIn(['urls','local']));
	});
	gulp.watch('dest/styles/*.less',['style']);
	gulp.watch('dest/scripts/*.js',['script']);
	gulp.watch('dest/images/*.*',['image']);
	gulp.watch('app/*.html',['html']);
});
