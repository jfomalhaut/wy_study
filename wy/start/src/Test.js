import React from 'react';

function Test(props) {
    return (
        <div>
            <h1>이름: {props.item.name}</h1>
            <h1>가격: {props.item.price}</h1>
        </div>
    );
}

export default Test;