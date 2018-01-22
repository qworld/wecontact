const router = require('koa-router')();
const https = require('https');
//official url for get token: https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET";
const baseUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential";


router.prefix('/tokens');

router.get('/', function (ctx, next) {
    ctx.body = 'this is a token response!';
});

router.get('/get', function (ctx, next) {
    let domain = 'api.weixin.qq.com';
    let path = '/cgi-bin/token?grant_type=client_credential';
    let requestPath = path + "&appid=" + "wx90bbba88d31e8381";
    requestPath += "&secret=" + "63b3a9188d3dfb3acf5c63c28ec1b05ß";

    const options = {
        hostname: domain,
        port: 443,
        path: path,
        method: 'GET'
      };
      
    const req = https.request(options, (res) => {
    console.log('状态码：', res.statusCode);
    console.log('请求头：', res.headers);
    
    res.on('data', (d) => {
        process.stdout.write(d);
    });
    });
      
    req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
    });
      
    // 写入数据到请求主体
    //req.write(postData);
    req.end();
      
      
});



module.exports = router;
