import prisma  from "../prisma"
import { newBlogpost } from "../types/blogpost_types"



export const newBlogPost = async (userId: string, blogData: newBlogpost)=> {

return prisma.blogPost.create({
	data: {
		...blogData,
		userId: userId
	},
})
};

export const getAllUserBlogs = async (userId: string)=> {
	return prisma.blogPost.findMany({
		where: {
			userId: userId
		}
	})
};

export const getAllBlogposts = async ()=> {
	return prisma.blogPost.findMany();

}
export const getSingleBlog= async (id: string, userId: string)=> {
	return prisma.blogPost.findUnique({
		where: {
			id,
			userId
		}
	})

}
