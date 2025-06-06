import React, { useRef, useState } from 'react'
import type { NewBlogPost } from '../types/blog_types'

type Props = {
    onsubmit: (blogData: NewBlogPost) => void;
}

const BlogpostForm: React.FC<Props>= ({onsubmit}) => {
    const contentRef  = useRef<HTMLTextAreaElement| null>(null);
    const [inputTitle, setInputTitle] = useState("");
    const [inputImgUrl, setInputImgUrl] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBlog: NewBlogPost = {
                
        }
    }
  return (
    <form>
        <label >
            enter a title
            <input type="text" onChange={(e)=> setInputTitle(e.target.value)} value={inputTitle}/>
        </label>
        <label >
            Image url:
            <input type="text"  onChange={(e)=> setInputImgUrl(e.target.value)} value={inputImgUrl}/>
        </label>
        <label >Description
            <textarea  cols={30} rows={10} ref={contentRef}></textarea>
        </label>
        <button type="submit">Send!</button>
    </form>
  )
}

export default BlogpostForm