import requestService from '../requestService';

export default {
	async createPost(data){
		const response = await requestService.post(`/posts/`, data)
		return response?.data
	},
    async updatePost(id,data){
		const response = await requestService.post(`/posts/${id}`, data)
		return response?.data
	},
    async getAllPosts(page){
		const response = await requestService.get(`/posts/${page}`)
		return response?.data
	},
	async getPostsByAuthor(id,page){
		const response = await requestService.get(`/posts/${id}/posts/${page}`)
		return response?.data
	},
	async getPostById(id){
		const response = await requestService.get(`/posts/post/${id}`)
		return response?.data
	},
    async deletePost(id){
		const response = await requestService.delete(`/posts/${id}`)
		return response?.data
	}
};