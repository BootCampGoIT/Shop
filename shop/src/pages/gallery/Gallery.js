import React from 'react';
import GalleryItem from './galleryItem/GalleryItem';




const Gallery = (props) => {
    return (
        <>
            {console.log('props', props)}
            <h2> Gallery </h2>

            <button onClick={() => props.history.push(props.location.state.from)}>go{props.location.state.fff}</button>
            <GalleryItem />
        </>
    );
}

export default Gallery;