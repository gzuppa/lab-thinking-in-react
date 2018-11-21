import React from 'react';


const Item = ({item}) => (
    <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
    </tr>
);

export default Item;