import { reqShopCartList, reqCheckCart, reqDeleteCart } from '@/api'

const state = {
    shopCartList: []
}
const mutations = {
    RECEIVESHOPCARTLIST (state, shopCartList) {
        state.shopCartList = shopCartList
    }
}
const actions = {
    // 获取购物车列表
    async getShopCartList ({ commit }) {
        const result = await reqShopCartList()
        // console.log(result);
        if (result.code === 200) {
            commit('RECEIVESHOPCARTLIST', result.data)
        }
    },
    // 添加数量
    async getShopCartAdd ({ commit }, { skuId, skuNum }) {
        console.log(skuId, skuNum);
        const result = await reqShopCartAdd(skuId, skuNum)
        // console.log(result);
        if (result.code === 200) {
            return '商品添加成功'
        } else {
            Promise.reject(new Error('请求商品失败'))
        }
    },
    // 勾选逻辑
    async getCheckCart ({ commit }, { skuID, isChecked }) {
        const result = await reqCheckCart(skuID, isChecked)
        // console.log(result);
        if (result.code === 200) {
            return '商品选中成功'
        } else {
            Promise.reject(new Error('商品选中失败'))
        }
    },
    // 全选
    updateAllIsChecked ({ commit, state, dispatch }, isChecked) {
        //定义数组存储每一项去发请求返回的promise对象
        let promises = []
        state.shopCartList.forEach(item => {
            if (item.isChecked === isChecked) return
            let promise = dispatch('getCheckCart', { skuID: item.skuId, isChecked: isChecked })
            promises.push(promise)
        })

        //Promise.all 传递的参数必须是一个promise对象的数组，返回值也是一个promise 
        //返回的promise对象的成功和失败  看数组内部所有的promise对象是否成功，如果都成功，那么它就成功，如果有一个失败，那它就失败
        //成功的返回值promise的数据是一个数组 【每个成功的promise的数据】
        return Promise.all(promises)
    },
    // 删除单个
    async getDeleteCart ({ commit }, skuID) {
        console.log(skuID);
        const result = await reqDeleteCart(skuID)
        console.log(result);
        if (result.code === 200) {
            return '删除成功'
        }
    },
}
const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}