import FullDetailsCard from "@/components/FullDetailsCard";
import React from "react";
export const instant = false;

const taka = (n) => `৳${Number(n).toLocaleString("bn-BD")}`;
const getProducts = async (category) => {
  const url = category
    ? `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`
    : `https://openapi.programming-hero.com/api/bazardor/products`;

  const res = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data;
};

const trend = {
  up: { text: "▲ দাম বেড়েছে", cls: "text-red-600", icon: "▲" },
  down: { text: "▼ দাম কমেছে", cls: "text-emerald-700", icon: "▼" },
  same: { text: "● দাম অপরিবর্তিত", cls: "text-gray-600", icon: "-" },
};

const ProductCard = ({ product }) => {
  const markets = product.markets || [];
  const minPrice = markets.length ? Math.min(...markets.map((m) => m.min)) : 0;
  const maxPrice = markets.length ? Math.max(...markets.map((m) => m.max)) : 0;
  const averagePrice = markets.length
    ? markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length
    : 0;

  const t = trend[product.change?.dir] ?? trend.same;

  const summary = [
    { title: "সর্বনিম্ন দাম", value: minPrice, color: "text-emerald-700" },
    { title: "সর্বোচ্চ  দাম", value: maxPrice, color: "text-red-600" },
    { title: "সর্বনিম্ন দাম", value: minPrice, color: "text-[#214c3a]" },
  ];

  return (
    <div>
      <FullDetailsCard
        product={product}
        t={t}
        averagePrice={averagePrice}
        
        taka={taka}
        summary={summary}
      />
    </div>
  );
};

export default async function Page({ params, searchParams }) {
  const { detailsCardId } = await params;
  const { category } = await searchParams;

  const products = await getProducts(category);
  const product = products.find((item) => item.slug === detailsCardId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f0f5f1] p-10 text-center">
        কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-4">
      <ProductCard product={product} />
    </div>
  );
}
