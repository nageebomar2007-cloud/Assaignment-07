import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
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

  return (
    <div>
      <MarqueeText direction="right" duration={8} >
        <div className="flex gap-10 mt-6">
          {data.map((item) => (
            <div key={item.id} className="flex">
              <div className="flex gap-2">
                <h2>{item.image}</h2>
                <Link href={item.slug}>{item.nameBn}</Link>
                <p>{item.today}টাকা/কেজি</p>
                <p
                  className={
                    item.change.pct > 0
                      ? "text-green-500"
                      : item.change.pct < 0
                        ? "text-red-600"
                        : "text-gray-500"
                  }
                >
                  {item.change.dir==="up"?"▲":item.change.dir==="down"?"▼":"="}
                </p>
                <p>{item.change.pct}%</p>
              </div>
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
