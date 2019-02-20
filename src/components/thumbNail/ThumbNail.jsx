import React, { Component } from 'react';

const ThumbNail = ({ serie }) => {
    return (
        <li className="card">
            <div className="thumb">
                <img src={serie.img169}></img>
            </div>

            <h4>{serie.title}</h4>
            <div className="synopsis">{serie.synopsis}</div>
        </li>
    );
}

export default ThumbNail;

/* <div class="thumbnail format text">
<div class="thumbnail-overlay">
<a class="overlay hover aspect-ratio-16_9" href="/program/reality/million-dollar-matchmaker" style="overflow: hidden;">
<div>
    <div class="dark-overlay-on-hover">
    <img src="https://playapi.mtgx.tv/imagecache/1000x675/cloud/content-images/seasons/20653/season/MDM-4qIInJj-uzHyQ2l.jpg" width="240" height="135" alt="">

    <div class="overlay-object overlay-object_cover"></div>
</div>


    </div>
    <a class="thumbnail-format format-title" href="/program/reality/million-dollar-matchmaker">Million Dollar Matchmaker</a>
    <div class="contextual-label">Lyckas hon hitta rätt match till de rika och kräsna?</div>
    </div>
    </a> */
