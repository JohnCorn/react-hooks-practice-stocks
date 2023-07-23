import React from "react";
import Stock from "./Stock";

function PortfolioContainer({purchasedStock, HandleSellStock}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {purchasedStock.map((d) =>(
        <Stock 
        key={d.id}
        stockInfo={d}
        BuySell={HandleSellStock}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
