import React from 'react';
import Category from "./catagoryitem"
const Listitem = (props) => {
    return (
        <div>
            <Category label={props.name} src={props.src}/>
        </div>
    );
}

export default Listitem;
