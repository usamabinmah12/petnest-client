import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-pink-50 to-blue-50">

      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Your Perfect <span className="text-pink-500">Pet Friend 🐶🐱🐦</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Adopt loving pets from trusted owners. Give them a second chance
          and bring happiness to your home today.
        </p>

        <Button className="mt-6 px-6 py-3 text-lg" color="primary">
          Adopt Now
        </Button>
      </div>

      <div className="mt-10 md:mt-0">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          alt="Happy pets"
          width={450}
          height={450}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

    </section>
        </div>
    );
};

export default Banner;