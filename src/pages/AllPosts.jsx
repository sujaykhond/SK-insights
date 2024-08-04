import React from 'react';
import { useState, useEffect } from 'react';
import service from '../appwrite/config';
import { Container, PostCard } from '../components';

const AllPosts = () => {
    const [post, setPost] = useState([])
    useEffect(()=>{
        service.getPosts([]).then((post)=> {
            if (post){
                setPost(post.documents)
            }
        })
    },[])
    

    
    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post)=> (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
