"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";


const NavBer = () => {
  const [date ,setDate] = useState("") ;
  useEffect(()=>{
    setDate(
         new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })
  );
    
  },[]);
    

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <button className="btn"> সাইন ইন</button>
        <button className="btn text-white  bg-green-600">সাইন আপ</button>
      </div>
      
    </div>
  );
};

export default NavBer;
