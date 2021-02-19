import React from "react";
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, subtitle, imageURL, size, history, linkurl}) => (

    <div className={`${size} menu-item`} onClick={() => history.push(linkurl)}>
        <div style={{backgroundImage: `url(${imageURL})`}} className='background-image'/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle.toUpperCase()}</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
