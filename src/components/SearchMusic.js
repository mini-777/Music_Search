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
        <div className="Music">
                <li>
                    <img className="coverart" src={images} alt={title} title={title}/>
                    <div className="music__data">
                        <h3 className="music__title">{title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</h3>
                        <p className="music__subtitle">
                            {subtitle}
                        </p>
                    </div>
                </li>
            </div>
        </Link>
    )
}

SearchMusic.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
};

export default SearchMusic;