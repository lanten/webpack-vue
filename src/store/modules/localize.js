
const langs = {
  'zh-CN': require('../../lang/language.zh-cn.json'),
  'en': require('../../lang/language.en.json'),
}

export default {
  namespaced: false,

  state: {
    language: navigator.language,
  },

  mutations: {
    changeLanguage(state, newLang) {
      state.language = newLang
    }
  },

  getters: {
    getLocalize: (state) => (key) => {
      return langs[state.language][key]
    }
  },
}