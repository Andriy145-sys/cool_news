import requestService from '../requestService';

export default {
	async createPost(data){
		const response = await requestService.post(`posts/`, data)
		return response?.data
	},
    async updatePost(id,data){
		const response = await requestService.post(`/posts/${id}`, data)
		return response?.data
	},
    async getAllPosts(){
		const response = await requestService.get(`/posts`)
		return response?.data
	},
	async getPostsByAuthor(id){
		const response = await requestService.get(`/posts/${id}/posts`)
		return response?.data
	},
	async getPostById(id){
		const response = await requestService.get(`/posts/${id}`)
		return response?.data
	},
    async deletePost(id){
		const response = await requestService.delete(`/posts/${id}`)
		return response?.data
	}
};