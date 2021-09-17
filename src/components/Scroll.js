import React from "react";
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div className='scrollType' style={{overflowY: 'auto', border: '5px gradient black', height:'500px', }}>
            {props.children}
        </div>
    ) 
};

export default Scroll;