import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false)

    const ClickAdmin = () => {
        setIsAdmin(!isAdmin);
        // setIsAdmin(prev => !prev)
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = () => {
        {
            axios.get('http://localhost:5000/posts')
                .then(response => setPosts(response.data))
                .catch(error => console.error("Error fetching projects:", error));
        }
    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (!confirmDelete) return;

        axios
            .delete(`http://localhost:5000/posts/${id}`)
            .then(() => {
                fetchPost(); // Refresh the list
            })
            .catch((error) => console.error('Error deleting project:', error));
    };

    return (
        <div>
            <h2>Projects</h2>
            <div>
                <button
                    className='button font-semibold text-fuchsia-50 p-2 bg-red-500 mb-5 float-right'
                    onClick={ClickAdmin}
                >
                    {isAdmin ? 'Exit Admin' : 'Admin'}
                </button>
            </div>

            <div className='flex gap-2 flex-wrap'>
                {posts.map(post => (
                    <div key={post.id}>
                        <BlogPost title={post.title} content={post.content} href={post.href}>
                            {isAdmin && (
                                <span className='flex gap-2'>
                                    {/* <button className='bg-black py-2 px-3 mb-2 text-fuchsia-400'>Edit</button> */}
                                    <button onClick={() => handleDelete(post.id)} className='bg-black py-2 px-3 mb-2 text-red-400'>Delete</button>
                                </span>
                            )}
                        </BlogPost>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;

