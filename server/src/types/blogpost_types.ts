import {BlogPost} from "@prisma/client"
export type newBlogPost = Omit<BlogPost, "id">
