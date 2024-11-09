import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)
    try {
        const { data } = await api.get(`/posts/${id}`);  // Assuming `/posts/:id` retrieves a specific post.
        return data || {};
    } catch (error) {
        console.error("Error fetching post:", error);
        return {};
    }

}