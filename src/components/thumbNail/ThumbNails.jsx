import React from 'react';
import ThumbNail from './ThumbNail';

const ThumbNails = ({ series }) => {
    return (
        <div id="thumbnails">
            {series && series.all.map(serie => <ThumbNail serie={serie} />)}
        </div>
    );
}

export default ThumbNails;