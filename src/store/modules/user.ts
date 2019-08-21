import cookie from 'js-cookie'

const uticket = cookie.get('uticket')
const userName = cookie.get('userName')

export default {
  state: {
    uticket,
    userName,
    userInfo: {},
    balance: {},
  },

  mutations: {
    // 更新 uticket
    updateUticket(state: any, uticket: string) {
      cookie.set('uticket', uticket)
      state.uticket = uticket
    },

    // 更新 userName
    updateUserName(state: any, userName: string = '') {
      cookie.set('userName', userName)
      state.userName = userName
    },

    // 更新用户信息
    updateUserInfo(state: any, userInfo: any) {
      state.userInfo = userInfo
    },

    // 更新用户余额
    updateBalance(state: any, balance: any) {
      state.balance = balance
    },
  },
}
