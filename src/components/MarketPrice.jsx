import React from "react";
import MarketPriceCard from "./MarketPriceCard";

const MarketPrice = async () => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  console.log(data);

  return (
    <div>
     
      <div className="grid grid-cols-3">
        {data
          .filter((item) => item.change?.dir === "up")




          .map((item) => (
            <MarketPriceCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default MarketPrice;
