import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ImBlocked } from "react-icons/im";

const NoUser = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
        <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <ImBlocked className="text-red-500 text-4xl" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Access Required
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          You need to be logged in to adopt a pet.
          <br />
          Please sign in to continue your journey 🐾
        </p>

        <Link href="/login">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-5 text-lg rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-md">
            Log In to Continue
          </Button>
        </Link>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <p className="text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-green-600 font-semibold hover:text-green-700 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NoUser;