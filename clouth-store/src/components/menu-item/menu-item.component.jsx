import React from "react";

import './menu-item.styles.scss'

const MenuItem = ({title, subtitle, imageURL, size}) => (

    <div className={`${size} menu-item`}>
        <div style={{backgroundImage: `url(${imageURL})`}} className='background-image'/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle.toUpperCase()}</span>
        </div>
    </div>
);

export default MenuItem;
