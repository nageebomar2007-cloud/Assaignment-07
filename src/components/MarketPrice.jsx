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

  const topHikes = data
    .filter((item) => item.change?.dir === "up")
    .sort((a, b) => Number(b.change?.pct ?? 0) - Number(a.change?.pct ?? 0))
    .slice(0, 6);
  const topdowns = data
    .filter((item) => item.change?.dir === "down")
    .sort((a, b) => Number(a.change?.pct ?? 0) - Number(b.change?.pct ?? 0))
    .slice(0, 6);

  return (
    <div>
      <div className="flex gap-3 my-3">
        <p className="pt-2 text-red-600">▲</p>
        <h1 className="text-2xl font-bold sm:text-3xl ">আজ দাম বেড়েছে</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topHikes.map((item) => (
          <MarketPriceCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex gap-3 my-5">
        <p className="pt-2 text-green-600">▼</p>
        <h1 className="text-3xl font-bold ">আজ দাম কমেছে</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topdowns.map((item) => (
          <MarketPriceCard key={item.id} item={item} />
        ))}
      </div>

      <div className="my-5">
        <p className="text-3xl font-bold pt-2">সব পণ্য</p>
        <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <MarketPriceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketPrice;
