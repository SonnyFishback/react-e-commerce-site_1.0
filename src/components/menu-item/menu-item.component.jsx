import React from 'react';
import { withRouter } from "react-router-dom";
// STYLESHEETS
import "../menu-item/menu-item.styles.scss";
// COMPONENTS

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return(
        <div className={` ${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="content">
                    <h1 className="title"> { title.toUpperCase() } </h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default withRouter(MenuItem);