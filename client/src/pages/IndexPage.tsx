import { useEffect, useState } from 'react'
import { DummyblogPosts } from '../dummyData/blogposts'
import type { BlogPost } from '../types/blog_types'
import BlogpostCard from '../components/BlogpostCard'
import Pagination from '../components/Pagination'

const IndexPage = () => {
  const [blogCollection, setBlogCollection] = useState<BlogPost[]>([]);
  const [Currentpage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const startIndex = (Currentpage -1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
 const totalPages =  Math.ceil(blogCollection.length / itemsPerPage);
 const totalItems = blogCollection.length
 const paginatedItems = blogCollection.slice(startIndex, endIndex);
  useEffect(()=>{
    setBlogCollection(DummyblogPosts)
  },[])

  return (
    <div>Index Page
      {blogCollection.length <= 0 && <p>No blogs!🤯</p>}
      <p>Showing {paginatedItems.length} of {totalItems} blogposts</p>
      {paginatedItems.map((blog)=> <BlogpostCard key={blog.id} blogData={blog}/>)}
      
      <Pagination 
        nextPageChange={()=> setCurrentPage((prev)=> prev + 1)} 
        previousPageChange={()=> setCurrentPage((prev)=> prev - 1)}
        nextPageDisabled={Currentpage >= totalPages}
        previousPageDisabled={Currentpage <= 1}
        currentPage={Currentpage}
        lastPage={totalPages}
        />
    </div>
  )
}

export default IndexPage