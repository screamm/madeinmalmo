import React from 'react'
import type { BlogPost } from '../types/blog_types'
import Card from 'react-bootstrap/Card';
import { Dummyusers } from '../dummyData/users';
type Props = {
    blogData: BlogPost
}

const BlogpostCard: React.FC<Props> = ({blogData}) => {
    const user = Dummyusers.find((user)=>user.id === blogData.userId);
    if (!user) {

    }
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"https://placehold.co/400"} />
    <Card.Body>
      <Card.Title>{blogData.title}</Card.Title>
      <Card.Subtitle>Author: {user ? user.first_name : "Anonymous" }</Card.Subtitle>
      <Card.Text>
        {blogData.content}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
export default BlogpostCard;