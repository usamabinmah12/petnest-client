import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-orange-100 py-20 px-6 md:px-20 rounded-b-[50px]">

      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        <div className="max-w-2xl text-center md:text-left">

          <div className="inline-block px-5 py-2 rounded-full bg-white shadow-md text-pink-500 font-semibold mb-6 text-2xl">
             Adopt • Love • Care
          </div>

          <h1 className="font-extrabold leading-tight text-gray-900 text-5xl">
            Give a Pet a Loving Home
      
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Thousands of adorable pets are waiting for a caring family.
            Find your perfect furry friend and make unforgettable memories together.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href={"/pets"}><Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold px-8 py-7 rounded-2xl shadow-xl hover:scale-105 transition"
            >
              Explore Pets
            </Button></Link>
            

            

          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-10">

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                500+
              </h2>
              <p className="text-gray-500">
                Pets Adopted
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                1K+
              </h2>
              <p className="text-gray-500">
                Happy Families
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                24/7
              </h2>
              <p className="text-gray-500">
                Pet Support
              </p>
            </div>

          </div>

        </div>

        <div className="relative flex justify-center items-center">

          <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-pink-400 to-orange-300 rounded-full blur-3xl opacity-30"></div>

          <Image
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
            alt="Pet"
            width={520}
            height={520}
            className="relative z-10 rounded-[40px] shadow-2xl object-cover border-8 border-white hover:scale-105 transition duration-500"
          />

          

        </div>

      </div>

    </section>
  );
};

export default Banner;