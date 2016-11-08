# progressBar
##jquery+sass 实现的进度条功能

##拿到代码怎么用
###sass部分安装

1.npm install --global node-sass

    若安装不上则
      * npm install cnpm
      * cnpm install --global node-sass
  
2.node-sass -w css/index.scss css/index.css --output-style expanded

    进入到progressBar文件夹下，运行，每次保存scss文件则会在css文件


##scss文件参数说明

1.  $bg:body背景色

2.  $cbg:圆内部背景色

3.  $barColor:未渲染部分染色

4.  $overlayColor:渲染部分颜色

5.  $size:图形大小

6.  $bdiam:圆环宽度
