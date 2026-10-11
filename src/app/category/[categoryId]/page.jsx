import ProductList from "@/components/ProductList";
import SingleItem from "@/components/SingleItem";
import Image from "next/image";
import React, { Suspense } from "react";
export const instant = false;

const getCategoryProducts = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
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

  return (
    <div>
      <SingleItem categoryId={categoryId} />

      <ProductList categoryProducts={categoryProducts} categoryId={categoryId} />

    </div>
  );
};

export default ItemDetail;
