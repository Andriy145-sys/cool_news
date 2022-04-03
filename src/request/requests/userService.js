import requestService from '../requestService';

export default {
	async update(id,data){
		const response = await requestService.post(`user/update/${id}`, data)
		return response?.data
	},
	async changePassword(id,data){
		const response = await requestService.post(`user/changePassword/${id}`, data)
		return response?.data
	},
	async getUserById(id){
		const response = await requestService.post(`user/${id}`)
		return response?.data
	}

};