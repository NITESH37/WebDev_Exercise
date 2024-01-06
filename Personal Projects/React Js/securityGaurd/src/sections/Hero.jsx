import React from "react";

const Hero = () => {
  return (
    <secttion id="home" className="w-full bg-black xl:flex-row flex-col gap-10">
      <h1 className="mt-20 ml-20 font-palanquin text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          Aman Security Gaurds
        </span>
        <br />
        <span className="text-red-400 inline-block mt-3">Service</span> Provider
        Company
      </h1>
      <p className="text-slate-gray text-lg leading-8 mt-6 mr-20 mb-14 sm:max-w-sm">
        "Securing your peace of mind is our priority. Our dedicated team of
        vigilant security guards ensures unwavering protection, employing
        expertise and advanced strategies. Trust us to safeguard your premises
        with unwavering commitment, offering top-notch security solutions
        tailored to your specific needs and concerns."
      </p>
    </secttion>
  );
};

export default Hero;
