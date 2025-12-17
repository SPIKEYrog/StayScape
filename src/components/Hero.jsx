import React from 'react';
import SearchBar from "../components/SearchBar";
import "../App.css";
function Hero() {
  return (
    <div className="">
      <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NTQyNDcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")] bg-no-repeat bg-cover bg-center h-screen'>

        {/* <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>
          The Ultimate Hotel Experience
        </p> */}

        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
          Discover Your Perfect Gateway Destination
        </h1>

        <p className='max-w-[530px] mt-2 text-sm md:text-base'>
          Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
        </p>

        <SearchBar />
        <div>
          
        </div>
        
       
      </div>
    </div>
  );
}

export default Hero;
