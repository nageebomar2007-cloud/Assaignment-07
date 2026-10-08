import ProductCard from "@/components/ProductCard";
import SingleItem from "@/components/SingleItem";
import Image from "next/image";
import React, { Suspense } from "react";
export const instant = false;

const getCategoryProducts = async (categoryId) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
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

  return data;
};

const ItemDetail = async ({ params }) => {
  const { categoryId } = await params;
  const categoryProducts = await getCategoryProducts(categoryId);
  console.log(categoryProducts, "categoryProducts");

  return (
    <div>
      <SingleItem categoryId={categoryId}/>
      <div className="grid grid-cols-3 gap-4 bg-[#eef3ee] p-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;
