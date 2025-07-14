import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <div className='flex gap-2 flex-wrap'>
                {posts.map(post => (
                    <div key={post.id}>
                        {/* <strong>{post.title}</strong>: {post.content} */}
                        <BlogPost title={post.title} content={post.content} href={post.href} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;

