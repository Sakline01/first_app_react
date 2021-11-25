import React from 'react';

const Catagoryitem = (props) => {
    return (
        <div>
            <label htmlFor="product name">{props.label}</label>
            <img src={props.src} alt={props.label} />
        </div>
    );
}

export default Catagoryitem;

