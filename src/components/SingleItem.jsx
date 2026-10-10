import React from "react";

const getCategoryProducts = async (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`;

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
const SingleItem = async ({ categoryId }) => {
  const categoryProducts = await getCategoryProducts(categoryId);
  const first = categoryProducts[0];

  return (
    <div className="flex items-center gap-3 my-15">
      <span className="text-4xl">{first.categoryIcon}</span>
      <div>
        <h1 className="text-2xl font-bold">{first.categoryNameBn}</h1>
        <p>{categoryProducts.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
      </div>
    </div>
  );
};

export default SingleItem;
