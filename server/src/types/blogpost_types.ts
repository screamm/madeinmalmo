import { BlogPost } from "@prisma/client"


export type newBlogpost = Omit<BlogPost, "id">
