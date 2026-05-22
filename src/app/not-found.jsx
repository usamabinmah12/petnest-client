'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="   min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-blue-50 p-6">

      <div className="text-center max-w-md w-full bg-white shadow-2xl rounded-3xl p-10 border border-gray-100 relative overflow-hidden">

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 blur-3xl opacity-20 rounded-full"></div>

       
        <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          404
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mt-3">
          Oops! Page not found
        </h1>

        <p className="text-gray-500 mt-2">
          Searching the page{"." .repeat(dots)}
        </p>

       

        <div className="mt-8 flex flex-col gap-3">

          <Link href="/">
            <Button className="w-2/12 bg-gradient-to-r from-pink-500 to-blue-500 font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition">
              Go Home
            </Button>
          </Link>

         

        </div>

      </div>
    </div>
  );
};

export default NotFound;