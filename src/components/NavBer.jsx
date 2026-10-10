"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";

const NavBer = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }));
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="navbar-start gap-2">
        <div className="p-4 bg-green-700 ">
          <Image
            src={"/logo-icon.png"}
            alt="shoping cart"
            height={40}
            width={30}
          ></Image>
        </div>
        <div>
          <a className="btn btn-ghost text-xl">বাজার দর</a>
          <div>{date}</div>
        </div>
      </div>

      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default NavBer;
