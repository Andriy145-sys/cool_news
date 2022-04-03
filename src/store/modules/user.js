export default {
	state: {
	  loggedUser: null
	},
	mutations: {
	  setLoggedUser(state, loggedUser) {
		state.loggedUser = loggedUser
	  },
	  clearUserLogged(state) {
		state.loggedUser = null
	  },
	},
	actions: {
	  async updateInfo({ commit, getters }, toUpdate) {
		try {
		  const updateData = { ...getters.loggedUser, ...toUpdate }
		  commit('setLoggedUser', updateData)
		}
  
		catch (e) {
		  commit('setError', e)
		  throw e
		}
	  },
	},
	getters: {
	  loggedUser: s => s.loggedUser,
	}
  }