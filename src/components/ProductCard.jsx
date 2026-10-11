import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, caregoryId }) => {
  const href = caregoryId
    ? `/detailsCard/${product.slug}?category=${categoryId}`
    : `/detailsCard/${product.slug}`;

  const dir = product.change?.dir; // "up" | "down" | other
  const badgeStyle =
    dir === "up"
      ? "bg-red-50 text-red-600"
      : dir === "down"
        ? "bg-green-50 text-green-600"
        : "bg-gray-100 text-gray-500";
  const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "=";

  return (
    <div className="card bg-base-100 rounded-2xl border border-gray-100 shadow-sm">
      <Link href={href}>
        <div className="card-body gap-3 p-4">
          {/* Icon + name */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
              {product.categoryIcon}
            </div>
            <div className="min-w-0">
              <h2 className="card-title truncate text-base font-semibold leading-tight">
                {product.nameBn}
              </h2>
              <p className="text-xs text-gray-500">প্রতি {product.unit}</p>
            </div>
          </div>

          {/* Price + change badge */}
          <div>
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-lg font-bold">
                {product.today}{" "}
                <span className="text-sm font-normal">টাকা</span>
              </p>

              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${badgeStyle}`}
              >
                <span className="text-[10px]">{arrow}</span>
                {product.change?.pct}%
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
