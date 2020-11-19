//这个文件是项目的接口请求函数文件
//给每个接口发请求，我们都把它封装成一个函数，到时需要请求拿数据的时候，就去调用对应的接口函数就完了
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'
// 请求获取三级分类列表数据
// get   /api/product/getBaseCategoryList   参数：无

export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: 'GET'
})


// 使用mock的接口去请求 banner数据   get 请求     /banner
export const reqBannerList = () => mockAjax.get('/banner')
export const reqFloorList = () => mockAjax.get('/floor')



//请求search的商品搜索列表数据
// post  /api/list   data   //data如果是空的对象代表没有搜索条件，会返回所有商品信息
export const reqGoodsList = (searchParams) => Ajax.post('/list', searchParams)

//请求商品详情数据

//  /api/item/{ skuId }   get

export const reqGoodsDetailInfo = (skuId) => Ajax.get(`/item/${skuId}`)


//请求添加购物车  /api/cart/addToCart/{ skuId }/{ skuNum }    post

export const reqAddOrUpdateShopCart = (skuId, skuNum) => Ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)



// /api/cart/cartList
export const reqShopCartList = () => Ajax.get(`cart/cartList`)
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqShopCartAdd = (skuId, skuNum) => Ajax.post(`cart/addToCart/${skuId}/${skuNum}`)


// /api/cart/checkCart/{skuID}/{isChecked}
export const reqCheckCart = (skuID, isChecked) => Ajax.get(`/cart/checkCart/${skuID}/${isChecked}`)
// /api/cart/deleteCart/{skuId}
export const reqDeleteCart = (skuID) => Ajax.delete(`/cart/deleteCart/${skuID}`)
// /api/user/passport/register
export const reqRegister = (useInfo) => Ajax.post(`/user/passport/register`, useInfo)

// /user/passport/login
export const reqLogin = (useInfo) => Ajax.post(`/user/passport/login`, useInfo)
// /api/user/passport/logout
export const reqLogOut = () => Ajax.get(`/user/passport/logout`)

// /api/order/auth/trade
export const reqTradeInfo = () => Ajax.get(`/order/auth/trade`)

// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, tradeInfo) => Ajax.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, tradeInfo)
// /api/payment/weixin/createNative/{orderId}
export const reqOrderInfo = (orderId) => Ajax.get(`/payment/weixin/createNative/${orderId}`)

//请求查看订单的支付状态信息 /api/payment/weixin/queryPayStatus/{orderId}  get
// 返回状态200代表支付成功   205代表支付中

export const reqPayStatus = (orderId) => Ajax.get(`/payment/weixin/queryPayStatus/${orderId}`)


//请求获取我的订单分页信息   /api/order/auth/{page}/{limit}   get

export const reqMyOrder = (page, limit) => Ajax.get(`/order/auth/${page}/${limit}`)
