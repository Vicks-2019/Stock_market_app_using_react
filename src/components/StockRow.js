import React from 'react'

export const StockRow = ({
    item
}) => {
    return (
        <tr>
           
            <td>{item.name}</td>
            <td>{item.symbol}</td>
            <td>{item.price_btc}</td>
            
        </tr>   
    )
}
