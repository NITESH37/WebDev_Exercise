import React from "react";
import {heroBg} from '../assests/images'


const Hero = () => {
  return (
    <secttion id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-16'>
       

        <h1 className=' font-palanquin text-[80px] max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          Aman Security Gaurds
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3 '>Service</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        "Securing your peace of mind is our priority. Our dedicated team of
        vigilant security guards ensures unwavering protection, employing
        expertise and advanced strategies. Trust us to safeguard your premises
        with unwavering commitment, offering top-notch security solutions
        tailored to your specific needs and concerns."
        </p>

      </div>

     
     

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary max-xl:py-40 bg-hero bg-cover bg-center'>
        
        <img
          src={heroBg}
          alt='shoe colletion'
          width={610}
          height={502}
          
          className='object-contain relative bg-transparent'
        />

      </div>
    </secttion>
  );
};

export default Hero;
