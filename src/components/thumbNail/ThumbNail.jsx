import React, { Component } from 'react';

const ThumbNail = ({ serie }) => {
    return (
        <li className="card">
            <a href="#">
                <div className="thumb">
                    <img src={serie.img169}></img>
                </div>
            </a>

            <h4>
                <a href="#">
                    {serie.title}
                </a>
            </h4>

            <div className="synopsis">{serie.synopsis}</div>
        </li>
    );
}

export default ThumbNail;