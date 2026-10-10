"use client";
import React from "react";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

const signedChange = (p) => {
  const pct = Math.abs(p.change?.pct ?? 0);
  if (p.change?.dir === "up") return pct;
  if (p.change?.dir === "down") return -pct;
  return 0;
};

const sorters = {
  default: null,
  priceLow: (a, b) => a.today - b.today,
  priceHigh: (a, b) => b.today - a.today,
  changeUp: (a, b) => signedChange(b) - signedChange(a),
  changeDown: (a, b) => signedChange(a) - signedChange(b),
};

const ProductList = ({ categoryProducts=[], categoryId }) => {
  const [sort, setSort] = useState("default");

  const sorted = useMemo(() => {
    const fn = sorters[sort];
    return fn ? [...categoryProducts].sort(fn) : categoryProducts;
  }, [categoryProducts, sort]);
  return (
    <div>
      <div className="bg-[#eef3ee] p-4">
        {/* Sort bar */}
        <div className="flex items-center justify-end gap-3 rounded-2xl border border-[#e0e9e1] bg-white px-6 py-5 shadow-sm">
          <label htmlFor="sort" className="text-sm text-gray-500">
            সাজান
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-[#e0e9e1] bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-green-600"
          >
            <option value="default">ডিফল্ট</option>
            <option value="priceLow">দাম: কম থেকে বেশি</option>
            <option value="priceHigh">দাম: বেশি থেকে কম</option>
            <option value="changeUp">সবচেয়ে বেশি দাম বেড়েছে</option>
            <option value="changeDown">সবচেয়ে বেশি দাম কমেছে</option>
          </select>
        </div>

        <p className="my-4 text-sm text-gray-600">
          মোট {sorted.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryId={categoryId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
