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

    const textStyle = {
        width: `${props.textWidth}`, 
        height: `${props.textHeight}`, 
        fontSize:  `${props.textSize}`,
    }

    const textColor = {
        color: `${props.textColor}`,
    }
    return (
        <div className="item-wrapper">
            <div className="item-image" style={itemStyle}></div>
            <div className="item-name" style={textStyle} >
                {props.itemName !== '' && <p style={textColor} className="item-name_text">{props.itemName}</p>}
            </div>
        </div>
    );
}

export default Item;