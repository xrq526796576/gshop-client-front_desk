import { reqLogin, reqLogOut } from '@/api'

const state = {
    userInfo: JSON.parse(localStorage.getItem('USERLOGININFO')) || {}
}
const mutations = {
    SERVICELOGINPAGE (state, userInfo) {
        state.userInfo = userInfo
    },
    SERVICELOGOUT (state) {
        state.userInfo = {}
    },
}

const actions = {
    async getLogin ({ commit }, userInf) {
        const result = await reqLogin(userInf)
        if (result.code === 200) {
            localStorage.setItem('USERLOGININFO', JSON.stringify(result.data))
            commit('SERVICELOGINPAGE', result.data)
        }
    },
    // 退出登录
    async getLogOut ({ commit }) {
        const result = await reqLogOut()
        if (result.code === 200) {
            commit('SERVICELOGOUT', result.data)


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