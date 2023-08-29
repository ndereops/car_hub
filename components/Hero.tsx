"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "@/node_modules/next/image";

const Hero = () => {
  const handleScroll = (setLimit) => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit)
  };
  return (
    <div className="hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easily{" "}
        </h1>
        <p className="hero__subtitle">
          streamline your car rental experince with our effortless process.
        </p>
        <CustomButton
          title="explore cars"
          containerStyles="bg-primary-blue
            text-white rounded-full mt-30"
          handleClick={handleScroll}
        />
      </div>
      <div className=" hero__image-container">
        <div className=" hero__image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        <div className=" hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
