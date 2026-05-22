import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

const NotAvailable = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full border">

        <div className="text-5xl mb-4">🔒</div>

        <h1 className="text-2xl font-bold text-gray-800">
          User Not Logged In
        </h1>

        <p className="text-gray-500 mt-2">
          Please log in to continue and access this feature.
        </p>

        <div className="mt-6 flex flex-col gap-3">
            
          <Link href="/login">
            <Button  className="w-2/12 bg-blue-600 hover:bg-blue-700 font-semibold py-3 rounded-xl transition">
              Login
            </Button>
          </Link>

          <Link href="/">
            <Button variant="danger-soft"  className="w-2/12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition">
              Go Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotAvailable;