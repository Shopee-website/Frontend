import React from "react";


function Banner (props){
    const bannerStyle = {
        backgroundImage: `URL(${props.imageURL})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: `${props.height || "auto"}`,
        width: `${props.width || "auto"}`,
    };
    return (
        <a href="/">
            <div className="banner-image" style={bannerStyle}></div>
        </a>
    );
}

export default Banner;