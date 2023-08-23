import React from "react";
import "./item.scss"

function Item (props){
    const itemStyle = {
        backgroundImage: `URL(${props.imageURL})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: `${props.height || "inherit"}`,
        width: `${props.width || "inherit"}`,
    };
    return (
        <div className="item-wrapper">
            <div className="item-image" style={itemStyle}></div>
            <div className="item-name">
                <p className="item-name_text">{props.itemName}</p>
            </div>
        </div>
    );
}

export default Item;