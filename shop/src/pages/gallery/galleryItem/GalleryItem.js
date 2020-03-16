import React from 'react';
import { withRouter } from 'react-router';

const GalleryItem = (props) => {
    return (
        <>

            GalleryItem
            <button onClick={() => props.history.replace("/")}>Go Home</button>
        </>
    );
}

export default withRouter(GalleryItem);