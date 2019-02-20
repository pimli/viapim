import React from 'react';
import ThumbNail from './ThumbNail';

const ThumbNails = ({ series }) => {
    return (
        <div id="main">
            <ul id="thumbnails" className="grid">
                {series && series.all.map((serie, i) => <ThumbNail serie={serie} key={i} />)}
            </ul>
        </div>

    );
}

export default ThumbNails;