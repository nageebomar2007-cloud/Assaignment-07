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
    <div className="mt-10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
      {" "}
      <div className="grid gap-2">
        <p className="h-7 w-fit bg-green-200 px-3 text-green-500">{date}</p>
        <h1 className="text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
        <p>
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- <br />
          সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="btn btn-success text-white bg-green-600 w-30">
          সব পণ্য দেখুন
        </button>
      </div>
      <div>
        <Image className="h-auto w-48 self-center md:w-72"
          src={"/bazar-hero.png"}
          alt="buscet"
          width={300}
          height={50}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
