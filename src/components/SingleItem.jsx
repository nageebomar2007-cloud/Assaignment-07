import React from "react";

const getCategoryProducts = async (categoryId) => {
  const url = `https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`;

  const res = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    console.log("URL:", url);
    console.log("Status:", res.status, res.statusText);
    console.log("Body:", await res.text());
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();

  return data;
};
const SingleItem = async ({ categoryId }) => {
  const categoryProducts = await getCategoryProducts(categoryId);
  console.log(categoryProducts, "categoryProducts");

  return (
    <div>
      <p>{categoryId.icon}</p>
      <p>{categoryId.nameBn}</p>
    </div>
  );
};

export default SingleItem;
