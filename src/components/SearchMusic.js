import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./css/SearchMusic.css";

function SearchMusic({
    id,
    title,
    subtitle,
    url,
    images
}) {
    return (
        <div className="Music">
            <Link
                to={{
                    pathname: `/music/${id}`,
                    state: {
                        id,
                        title,
                        subtitle,
                        images,
                        url
                    }
                }}>
                <li>
                    <img className="coverart" src={images} alt={title} title={title}></img>
                    <div className="music__data">
                        <h3 className="music__title">{
                                title
                                    .replace(/<b>/gi, "")
                                    .replace(/<\/b>/gi, "")
                            }</h3>
                        <p className="music__subtitle">
                            {subtitle}
                        </p>
                    </div>
                </li>
            </Link>
        </div>
    )
};

SearchMusic.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
};

export default SearchMusic;