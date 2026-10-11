"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const NavLinksClient = ({ data }) => {
  const router = useRouter();
  const handleClick = (slug, nameBn) => {
    toast.success(`${nameBn} show successful`);
    router.push(`/category/${slug}`);
  };

  return (
    <div className="flex gap-15 mt-5 ">
      {data.map((item) => (
        <div key={item.id} className="flex justify-between">
          <h1>{item.icon}</h1>

          <div className="cursor-pointer" onClick={() => handleClick(item.slug, item.nameBn)}>
            {item.nameBn}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinksClient;
