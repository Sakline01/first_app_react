import React from 'react';
import ListHeader from "./listHeader";
import Listitems from "./listItem";
const List = (props) => {
    return (
        <>
            <ListHeader title={props.heading}/>
            <Listitems name={props.name} src={props.src}/>
        </>
    );
}

export default List;
