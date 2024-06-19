---
# 这是文章的标题
title: 运行开发服务器
order: 5
# 设置写作时间
date: 2024-05-27
# 一个页面可以有多个分类
category:
  - 开发文档
# 一个页面可以有多个标签
---

## Webpack 和 Vite
待更新...

## Uni-App
Uni-App 是一套跨平台前端开发框架，可以实现编写一套代码，到处运行。但是其运行效果在各个平台上可能会有差异。

因此，在开发调试 Uni-App 时，我们应在每个环境上都运行调试一遍。
### WEB 环境运行
1. 打开 uni-app 项目的页面，点 HBuilderX 右上角的运行按钮。
2. 点击运行到浏览器 -> Chrome。
3. 等待 HBuilderX 编译并启动开发服务器，HBuilderX 启动成功后会自动打开项目运行页面。

### 真机环境运行
1. 手机打开开发者模式。(各品牌手机打开方式不同，一般打开方式为：设置 -> 设备信息 -> 快速点击版本信息多次)
2. 手机在开发者模式中设置页面中开启USB调试，有USB安装这一选项的话也要开启。
3. 手机硬件通过USB数据线线连接到 HBuilderX 所在电脑。
4. 打开 uni-app 项目的页面，点 HBuilderX 右上角的运行按钮。
5. 点击运行到手机或模拟器 -> 运行到 Android App 基座 -> 使用标准基座运行 -> 运行。
6. 等待 HBuilderX 编译打包运行环境App，在此过程中手机可能会弹出提示*正在通过USB安装应用*，此时请点击允许。
7. 编译完成且运行环境安装成功后，手机会自动打开运行环境App。

## 纯静态HTML项目
纯静态的项目，即基于原生js或者JQuery等开发的项目，要运行开发服务器虽然也有基于 Nodejs 的方案，但我更推荐使用 Nginx，因为它更接近生产环境，资源占用也更小。
### 安装Nginx
1. 打开[最新版本发布地址](https://nginx.org/en/download.html)。
2. 下载最新版本的 Download for Windows Stable version 文件。
3. 将下载的 zip 文件解压到要安装 Nginx 的目录。

### 配置Nginx
1. 在 Nginx 的安装目录里，打开`conf`文件夹，使用合适的编辑器打开`nginx.conf`文件。
2. 在`http`代码块内，粘贴如下代码：
```nginx
server {
  # 项目运行的端口号，注意不能有重复或者被占用
  listen       9000;
  server_name  localhost;
  # 不使用缓存
  add_header Cache-Control no-store;
  location / {
    # 项目的根目录地址
    root   D:/workspace/project;
    index  index.html index.htm;
  }
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   html;
  }
}
```
完整配置文件如下：
```nginx
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       9000;
        server_name  localhost;
        # 不使用缓存
        add_header Cache-Control no-store;
        location / {
            root   D:/workspace/project;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html/dist;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```
3. 在 Nginx 的安装目录里，按住shift键并点击右键，在弹出的右键菜单中点击在此处打开PowerShell窗口。
4. 校验编辑的配置文件是否正确：
```bash
./nginx -t
# 配置文件正确时输出信息: 
# nginx: the configuration file D:\xxx\nginx/conf/nginx.conf syntax is ok
# nginx: configuration file D:\xxx\nginx/conf/nginx.conf test is successful
# 配置文件错误时输出信息: 
# nginx: [emerg] unknown directive "test" in D:\xxx\nginx/conf/nginx.conf:12
# nginx: configuration file D:\xxx\nginx/conf/nginx.conf test failed
```
5. 启动 Nginx 服务器:
```bash
./nginx
```
或者，当前已经在运行着 Nginx 服务器，此时可尝试重载配置：
```bash
./nginx -s reload
```
6. 在浏览器打开要调试的页面：按照本文的配置文件，应该打开的页面即为`http://localhost:9000`。