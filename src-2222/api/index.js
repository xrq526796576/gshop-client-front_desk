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

