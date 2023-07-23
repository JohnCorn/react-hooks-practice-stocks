import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, HandleBuyStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((d) =>(
        <Stock 
        key={d.id}
        stockInfo={d}
        BuySell={HandleBuyStock}
        />
      ))}
    </div>
  );
}

export default StockContainer;
