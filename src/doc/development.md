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
待更新...

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