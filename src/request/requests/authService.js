import requestService from '../requestService';
const prefix = '/auth';

export default {
	async sign_up(data){
		console.log(data)
		const response = await requestService.post(`${prefix}/sign_up`, data)
		return response?.data
	},
	async login(params){
		const response = await requestService.post(`${prefix}/sign_in`,params)
		return response?.data
	},
};