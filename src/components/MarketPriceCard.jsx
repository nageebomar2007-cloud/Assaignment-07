import React from 'react';

const MarketPriceCard = ({item}) => {
    return (
            <div>
              <div className=" w-full max-w-md rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                {/* Top: icon + name */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl">
                    {item.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.nameBn}
                    </h3>
                    <p className="text-sm text-gray-600">প্রতি কেজি</p>
                  </div>
                </div>

                {/* Bottom: price + change badge */}
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-700">আজকের দাম</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      {item.today}{" "}
                      <span className="text-lg font-medium">টাকা</span>
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold ${
                      item.change.dir
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    <span className="text-xs">
                      {item.change.dir ? "▲" : "▼"}
                    </span>
                    {item.change.pct}
                  </span>
                </div>
              </div>
            </div>
    );
};

export default MarketPriceCard;