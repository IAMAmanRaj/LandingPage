import React from "react";

const Scanner = () => {
  return (
    <div className="bg-black h-[1000px] 2xl:w-full pl-1 flex items-start">
      <img
        className="2xl:w-full h-[950px] pr-[5.5px]"
        src="/images/Rectangle 12.png"
        alt="background-scanner"
      ></img>
      <img
        className="absolute pt-[400px] pl-[1070px]"
        src="/images/Light.png"
        alt="notification"
      ></img>
      <img
        className="absolute pt-[700px] pl-[60px]"
        src="/images/Light.png"
        alt="notification"
      ></img>

      <h1 className="text-white text-7xl font-bold absolute pl-[220px] pt-20">
        Scan To Download Voluble App
      </h1>
      <img
        className="absolute pt-[280px] pl-[490px]"
        src="/images/iPhone 14 Pro - Deep Purple - Portrait.png"
        alt="phone"
      ></img>
      <img
        className="absolute pt-[540px] pl-[600px]"
        src="/images/qrcode.png"
        alt="qr"
      ></img>
      <img
        className="absolute  pt-[640px] pl-[710px]"
        src="/images/Social_Media_Icons.png"
        alt="qr logo"
      ></img>
    </div>
  );
};

export default Scanner;
