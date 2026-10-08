"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const NavBer = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date();

    const formatedData = date.toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(formatedData);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start gap-2">
        <div className="p-4 bg-green-700 ">
          <Image
            src={"/logo-icon.png"}
            alt="shoping cart"
            height={40}
            width={20}
          ></Image>
        </div>
        <div>
          <a className="btn btn-ghost text-xl">বাজার দর</a>
          <div>{date}</div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <button className="btn"> সাইন ইন</button>
        <button className="btn text-white  bg-green-600">সাইন আপ</button>
      </div>
      
    </div>
  );
};

export default NavBer;
