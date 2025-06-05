import { Request, Response } from "express";
import { getAllBlogposts, getAllUserBlogs, getSingleBlog, newBlogPost } from "../services/blog_services";
import { handlePrismaError } from "../exceptions/prisma";


//get blogs
export const index = async (_req: Request, res: Response) => {
	const blogs = await getAllBlogposts();
res.status(200).send({status: "success", data: {blogs}})

}
//get a users blog collection

export const show = async (req: Request, res: Response) => {
	const userId = req.params.userId;
	if (!req.user || userId !== req.user.id) {
		res.status(401).send({status: "error", message: "Unauthorized"});
		return;
	}
	try {
		const getUserBlogs= await getAllUserBlogs(req.user.id)
		res.send({status: "success", data: {getUserBlogs}})
	}catch (err) {
		const { status_code, body } = handlePrismaError(err);
		res.status(status_code).send(body);
	}

};

// get a users blog by id
export const find = async (req: Request, res: Response) => {
	const blogId = req.params.blogId
	if (!req.user) {
		res.status(401).send({status: "error", message: "Unauthorized"});
		return;
	}
	try {
		const blog = await getSingleBlog(blogId, req.user.id)
		res.send({status: "success", data: blog})
	}catch (err) {
		const { status_code, body } = handlePrismaError(err);
		res.status(status_code).send(body);
	}
};

// post a new blog
export const post = async (req: Request, res: Response) => {
	if (!req.user) {
		res.status(401).send({status: "error", message: "Unauthorized"});
		return;
	}
	try {
	const newPost = await newBlogPost(req.user.id, req.body);
	res.status(201).send({status: "success", data: newPost})
	}catch (err) {
		const { status_code, body } = handlePrismaError(err);
		res.status(status_code).send(body);
	}
};

