export interface NewBlogPost {
    
    title: string;
    content: string;
    img_url: string;
}
export interface BlogPost extends NewBlogPost {
    id: string;
    userId: string;
}