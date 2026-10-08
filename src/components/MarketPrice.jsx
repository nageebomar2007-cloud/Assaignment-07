import React from "react";

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
  return <div>

  </div>;
};

export default MarketPrice;
