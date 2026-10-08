"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date();

    const formatedData = date.toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(formatedData);
  }, []);

  return (
    <div className="mt-15 flex justify-between ">
      <div className="grid gap-2">
        <p className="w-50 h-7  bg-green-200 text-green-500">{date}</p>
        <h1 className="text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
        <p>
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- <br />
          সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="btn btn-success text-white bg-green-600 w-30">সব পণ্য দেখুন</button>
      </div>
      <div>
        <Image src={"/bazar-hero.png"}
        alt="buscet"
        width={300}
        height={50}>
            
        </Image>
      </div>
    </div>
  );
};

export default Banner;
