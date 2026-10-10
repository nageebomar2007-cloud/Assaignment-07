import React from "react";

const FullDetailsCard = ({ product, t, summary, taka }) => {
  const markets = product.markets || [];

  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 rounded-2xl border border-[#e0e9e1] bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf4ed] text-4xl">
              {product.image || product.categoryIcon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.nameBn}
              </h1>
              <p className="mt-1 text-xs text-gray-500">
                প্রতি কেজি · {product.categoryNameBn}
              </p>
              <p className="mt-2 text-xs text-gray-800">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold">
                  {product.change?.dir === "up"
                    ? "বেড়েছে"
                    : product.change?.dir === "down"
                      ? "কমেছে"
                      : "অপরিবর্তিত"}
                </span>
                {product.change?.amount ? (
                  <>
                    {" "}
                    · {Number(product.change.amount).toLocaleString(
                      "bn-BD",
                    )}{" "}
                    টাকা
                  </>
                ) : null}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#edf5ef] px-8 py-4 text-center sm:min-w-44">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="mt-1 text-4xl font-bold text-gray-900">
              {Number(product.today).toLocaleString("bn-BD")}
            </p>
            <p className="mt-1 text-xs text-gray-500">টাকা / কেজি</p>
            <p className={`mt-1 text-xs font-semibold ${t.cls}`}>
              {t.icon}{" "}
              {Math.abs(product.change?.pct ?? 0).toLocaleString("bn-BD")}%
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-[#e0e9e1] bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-base font-bold text-gray-900">
            দামের সারসংক্ষেপ
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {summary.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="rounded-2xl border border-[#e0e9e1] bg-[#fbfdfb] px-5 py-4"
              >
                <p className="text-xs text-gray-500">{item.title}</p>
                <p className={`mt-2 text-2xl font-bold ${item.color}`}>
                  {(Math.round(item.value * 100) / 100).toLocaleString("bn-BD")}{" "}
                  <span className="text-sm font-semibold">টাকা</span>
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  {
                    [
                      "সবচেয়ে কম দামের বাজার",
                      "সবচেয়ে বেশি দামের বাজার",
                      "প্রতি কেজি-এর হিসাব",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Market table */}
        <div className="rounded-2xl border border-[#e0e9e1] bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-base font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e0e9e1]">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="text-xs text-gray-500">
                  <th className="px-4 py-3 font-medium">বাজার</th>
                  <th className="px-4 py-3 font-medium">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                  <th className="px-4 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m, index) => (
                  <tr
                    key={`${m.market}-${m.division}`}
                    className={`border-t border-gray-300 text-xs text-gray-800 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#f1f6f2]"
                    }`}
                  >
                    <td className="px-4 py-3">{m.market}</td>
                    <td className="px-4 py-3">{m.division}</td>
                    <td className="px-4 py-3 text-right">
                      {Number(m.min).toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="px-4 py-3 text-right">
                      {Number(m.max).toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="px-4 py-3 text-right font-bold">
                      {((m.min + m.max) / 2).toLocaleString("bn-BD")} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullDetailsCard;
