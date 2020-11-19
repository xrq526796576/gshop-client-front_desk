import { reqRegister } from '@/api'

const state = {

}
const mutations = {

}

const actions = {
    async getRegister ({ commit }, userInf) {
        const result = await reqRegister(userInf)
        if (result.code === 200) {
            return '注册成功'
        }
        else {
            Promise.reject(new Error('注册失败'))
        }
    }
}

const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}