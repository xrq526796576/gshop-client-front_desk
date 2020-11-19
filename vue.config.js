module.exports = {
    //  写自己想要配置的东西去覆盖系统自带的
    // 关闭ESLint的规则
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://182.92.128.115",//默认会加上/api
                changeOrigin: true, // 支持跨域
                // pathRewrite: { "^/api": "/api" }//这种接口配置出来    http:182.92.128.115/api/api/login
                // pathRewrite: { "^/api": "" }//这种接口配置出来     http://182.92.128.115/api/login 不要,会复写报错
            }
        }
    }

}