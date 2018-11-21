import React from 'react';
import Item from './Item'

const Table = ({stock}) => (
    

            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {stock.data.map((item,index) => <Item key={index} item={item}/>)}
                </table>
            </div>
)

export default Table;