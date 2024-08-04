import React, { useState } from 'react';
import service from '../appwrite/config';
import { Link } from 'react-router-dom';
import CardLoader from './CardLoader';

const PostCard = ({ $id, title, featuredImage }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div>
            <Link to={`/post/${$id}`}>
                <div className='w-full bg-gray-100 rounded-xl p-4'>
                    <div className='w-full justify-center mb-4'>
                        {loading && <CardLoader />} 
                        <img
                            src={service.getFilePreview(featuredImage)}
                            className={`rounded-xl ${loading ? 'hidden' : 'block'}`} // Hide image while loading
                            alt={title}
                            onLoad={handleImageLoad}
                        />
                    </div>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default PostCard;