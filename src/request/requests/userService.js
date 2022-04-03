import requestService from '../requestService';

export default {
	async updateUserData(id,data){
		const response = await requestService.post(`/user/update/${id}`, data)
		return response?.data
	},
	async changePassword(id,data){
		const response = await requestService.post(`/user/change_password/${id}`, data)
		return response?.data
	},
	async getUserById(id){
		const response = await requestService.get(`/user/${id}`)
		return response?.data
	}

};