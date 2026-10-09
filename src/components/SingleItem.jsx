import React from "react";

const getCategoryProducts = async (categoryId) => {
  const url = `https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`;

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
  console.log(categoryProducts, "categoryProducts");

  return (
    <div className="flex items-center gap-3 my-15">
      <span className="text-4xl">{categoryProducts.icon}</span>
      <h1 className="text-2xl font-bold">{categoryProducts.nameBn}</h1>
      <p>{} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
    </div>
  );
};

export default SingleItem;
