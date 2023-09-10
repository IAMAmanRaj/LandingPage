import React from "react";
import "../App.css";

const Herosection = () => {
  return (
    <>
      <div className="flex items-start bg-black h-full w-full ">
        <img
          className="p-2 h-[740px] 2xl:w-[1000px] xl:w-[760px] lg:w-[720px] md:w-screen md:p-2 sm:w-[550px]"
          src="/images/Rectangle 7.png"
          alt="herobg"
        ></img>
        <div className="absolute  2xl:px-[225px]  xl:px-[105px]  pt-120; md:pt-[100px] lg:px-[95px]  md:px-[100px] sm:px-[45px]  ">
          <h1 className="text-white  w-[450px] tracking-[2.15px]  font-bold xl:text-[57px] leading-tight sm:text-[50px] md:w-[470px] md:tracking-[2.15px]">
            Embrace Total Anonymity and Unyielding Privacy
          </h1>
          <p className="text-white mt-[32px] tracking-[0.11px] xl:w-[538px] text-base md:text-20px sm:w-[450px]">
            Embark on a journey into the world of seamless and secure
            communication with our cutting-edge Private Chat App.🌐Unveiling a
            realm where your privacy takes center stage and anonymity becomes
            your shield, we present a platform tailored exclusively for YOU.
          </p>

          <button className="text-white h-[54px] w-[252px] mt-7 border rounded-full flex items-center">
            <p className="pl-5 text-[17px]">DOWNLOAD THE APP</p>
            <img
              className="w-[38px] h-[38px] ml-[14px]"
              src="/images/Frame 2.png"
              alt="download now btn"
            ></img>
          </button>
        </div>
        <div className="gradient absolute mt-[160px] 2xl:ml-[1330px] xl:ml-[945px] lg:ml-[890px] md:ml-[690px] sm:h-[450px] sm:ml-[600px] lg:w-[460px]"></div>
        <img
          className="2xl:ml-[1380px] xl:ml-[990px] lg:ml-[940px] lg:w-[350px] lg:h-[400px] mt-[160px] h-[424px] w-[364px] hero-animation absolute md:w-[364px] md:h-[424px] md:ml-[740px]"
          src="/images/Vector_Big.png"
          alt="logo"
        ></img>
      </div>
    </>
  );
};

export default Herosection;
