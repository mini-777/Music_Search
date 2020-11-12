import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function SearchMusic({title, subtitle, url, images}){
    return (
        <div className="Music">
            <a href={url} target="_blank">
                <img src={images} alt={title} title={title}></img>
                <div className="music__data">
                    <h3 className="music__title">{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</h3>
                    <p className="music__subtitle">
                        <span>가수 : </span> {subtitle}
                    </p>
                </div>
            </a>
        </div>
    )
};


SearchMusic.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
};

export default SearchMusic;