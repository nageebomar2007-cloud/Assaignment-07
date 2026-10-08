import Link from "next/link";
import React from "react";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",{
        next:{
            revalidate:3600
        },
    }
  );

  if (!res.ok) {
     throw new Error("Failed to fetch categories")
  }
  const data = await res.json();

  return (
    <div className="flex gap-15 mt-5">
      {data.map((item) => (
        <div key={item.id} className="flex justify-between">
          <h1>{item.icon}</h1>
          <Link href={`/category/${item?.slug}`}>{item.nameBn}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
