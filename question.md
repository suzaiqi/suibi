# 1.为何使用absolute定位，超出部分不显示，无论层级多少都不显示，使用fixed却可以 --右下角时间的弹窗显示问题（整条右下角使用fixed定位）
    fixed定位: 1.脱离文档流， 2.以窗口为参照物 3.以固定位置存在，不论窗口是否滚动

    absolute定位: 1.脱离文档流 2.向上查找相对定位，以设置最近祖先相对定位元素为参照物，未找到，以body为参照物，

    相同点：
    1）所有标签层级默认为0
    2）层级取值范围：负九位数-正九位数
    3）谁的层级大，谁在上面
    4）脱离文档流
    \color{orange}{注意：}定位元素层级优先级高于普通元素，即使普通元素设置层级比定位元素值大

    检查了一下代码，原来在footer上面添加的overflow: hidden，导致内部的内容超过之后不滚动，然后将内容清除，fixed默认定位层级比absolute定位高，若是将overflow改为visible,倒是可以显示，但是却会有滚动，但是我却不需要滚动。简单改法，将absolute定位改为fixed定位，fixed定位隔绝性很强，自己玩自己的


# 2.如何解决 Access to script at 'file:///D:/study/gitHub/suibi/time.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https. 报错问题

    通过查找，发现这个问题的产生是因为我在index.html页面当中使用了import，但是浏览器不识别import关键字这个ES6的标识，提示被CORS策略阻止，不能直接通过文件路径引用带有import关键字的JS脚本。但是我只想调试页面而已，不使用服务器，不编译这些脚本文件，不使用第三方工具只在纯Chrome浏览器上进行调试，那么该如何解决跨域这个问题？

    我在思否网站看到一篇文章（https://segmentfault.com/q/1010000020120230），下面评论给出了答案，1.创建一个node服务， 2.关掉浏览器的CORS策略，既然解决不掉问题，就把提出问题的人干掉，但是这样会引发一些危险，因为CORS机制是实现跨站点请求的同时阻止恶意JS脚本。思来想去，我决定创建一个服务器

# 3.创建服务器

    快速简单创建

    1.npm init

    一路默认下来

    2.修改package.json里面的dev: "devby"

    整个文件内容为

    ```js
    {
        "name": "suibi",
        "version": "1.0.0",
        "description": "",
        "main": "time.js",
        "scripts": {
            "dev": "devby"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/suzaiqi/suibi.git"
        },
        "author": "",
        "license": "ISC",
        "bugs": {
            "url": "https://github.com/suzaiqi/suibi/issues"
        },
        "homepage": "https://github.com/suzaiqi/suibi#readme",
        "dependencies": {
            "devby": "^0.1.0"
        }
    }
    ```

    3.下载资源 npm install --save devby

    4.启动项目 npm run dev

