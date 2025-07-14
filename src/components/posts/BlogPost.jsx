import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/db.json';

const BlogPost = () => {
    const { slug } = useParams();

    // Find post by slug 
    const post = data.posts.find(p => p.slug === slug);

    if (!post) {
        return <div className="p-4 text-red-600">Post not found</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-6">{post.content}</p>
            <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-4 rounded">{post.story}</pre>
        </div>
    );
};

export default BlogPost;
