"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { toast } from "react-toastify";

const MarqueeClient = ({ data }) => {
  const router = useRouter();

  const handleRouter = (slug, nameBn) => {
    toast.success(`${nameBn} details successfully shown`);
    router.push(`/detailsCard/${slug}`);
  };

  return (
    <div>
      <MarqueeText direction="right" duration={9}>
        <div className="flex gap-10 mt-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex shrink-0 cursor-pointer"
              onClick={() => handleRouter(item.slug, item.nameBn)}
            >
              <div className="flex gap-2">
                <h2>{item.image}</h2>

                <p>{item.nameBn}</p>

                <p>
                  {item.today} টাকা/{item.unit}
                </p>

                <p
                  className={
                    item.change?.pct > 0
                      ? "text-green-500"
                      : item.change?.pct < 0
                        ? "text-red-600"
                        : "text-gray-500"
                  }
                >
                  {item.change?.dir === "up"
                    ? "▲"
                    : item.change?.dir === "down"
                      ? "▼"
                      : "="}
                </p>

                <p>{item.change?.pct ?? 0}%</p>
              </div>
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default MarqueeClient;
