import React from "react";
import MarketPriceCard from "./MarketPriceCard";

const MarketPrice = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products`,
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

  return (
    <div>
      <div className="flex gap-3 my-3">
        <p className="pt-2 text-red-600">▲</p>
        <h1 className="text-3xl font-bold ">আজ দাম বেড়েছে</h1>
      </div>
      <div className="grid grid-cols-3">
        {data
          .filter((item) => item.change?.dir === "up")

          .map((item) => (
            <MarketPriceCard key={item.id} item={item} />
          ))}
      </div>

      <div className="flex gap-3 my-5">
        <p className="pt-2 text-green-600">▼</p>
        <h1 className="text-3xl font-bold ">আজ দাম কমেছে</h1>
      </div>
      <div className="grid grid-cols-3">
        {data
          .filter((item) => item.change?.dir === "down")

          .map((item) => (
            <MarketPriceCard key={item.id} item={item} />
          ))}
      </div>

      <div className="my-5">
        <p className="text-3xl font-bold pt-2">সব পণ্য</p>
        <p>মোট {}টি পণ্য দেখানো হচ্ছে</p>
      </div>
      <div className="grid grid-cols-3">
        {data.map((item) => (
          <MarketPriceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketPrice;
