import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() 
{
  const[stocks, setStocks]=useState([]);
  const[purchasedStock, setPurchasedStocks]=useState([]);
  const[filterType, setFilterType]=useState("Tech"); 
  const[sortType, setSortType]=useState("Alphabetically"); 

  function HandleBuyStock(newPurchase)
  {
    const curPurchased = [...purchasedStock, newPurchase];
    setPurchasedStocks(curPurchased);
  }

  function HandleSellStock(soldItem)
  {
    const curPurchased = [...purchasedStock];

    var index = curPurchased.indexOf(soldItem);
    curPurchased.splice(index, 1);

    setPurchasedStocks(curPurchased);
  }

  useEffect(() =>
  {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(data => {
      setStocks(data);
      console.log("data", data)
    })
  },[]);

  const sortedStocks= [...stocks].sort((stock1, stock2) => {
    if (sortType === "Alphabetically")
    {
      return (stock1.name.localeCompare(stock2.name));
    }else
    {
      return (stock1.price - stock2.price);
    }
  });

  const filteredStocks = ((sortedStocks.filter(s => 
      s.type === filterType))
  );

  return (
    <div>
      <SearchBar 
      setFilterType={setFilterType}
      setSortType={setSortType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={filteredStocks}
          HandleBuyStock={HandleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
          purchasedStock={purchasedStock}
          HandleSellStock={HandleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
