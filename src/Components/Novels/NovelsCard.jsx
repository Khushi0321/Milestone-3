import React from 'react';
import './Novels.css';

const NovelsCard = ({
    novelName,
    novelDescription,
    imageUrl,
    novelUrl,
}) => {
    return (
        <div className='novel-card'>
            <div className='image-container'>
                <a href={novelUrl} className='novel-external-link'>
                    <img
                        src={imageUrl}
                        alt='novel'
                        className='novel-image'
                    />
                </a>
            </div>

            <div className='novel-details-container'>
                <h2 className='novel-heading'>{novelName}</h2>
                <p className='novel-details'>{novelDescription}</p>
        
            </div>
        </div>
    );
};

export default NovelsCard;
/*
*/