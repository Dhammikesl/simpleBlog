import React from 'react'

const PostCard = ({ title, content, href }) => {
    return (
        <div className='flex'>
            <div className='card max-w-sm max-h-sm p-2 rounded-sm gap-2 overflow-hidden bg-gray-400'>
                <div className='card-body relative'>
                    <div className='title text-lg uppercase font-semibold'>{title}</div>
                    <div className='content'>{content}</div>
                    <div className='text-xs mt-2 font-medium text-right'><a href={href} target="_blank" rel="noopener noreferrer">Read more</a></div>
                </div>
            </div>
        </div>
    )
}

export default PostCard