import React from "react";

function Stock({stockInfo, BuySell}) 
{
  function BuySellStock()
  {
    BuySell(stockInfo);
  }

  return (
    <div onClick={BuySellStock}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stockInfo.name}</h5>
          <p className="card-text">{stockInfo.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;