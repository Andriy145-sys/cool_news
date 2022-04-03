import requestService from '../requestService';
const prefix = '/auth';

export default {
	async sign_up(params){
		const response = await requestService.post(`${prefix}/sign_up`,params)
		return response?.data
	},
	async login(params){
		const response = await requestService.post(`${prefix}/sign_in`,params)
		return response?.data
	},
};