'use client';

import { useState } from "react";
import Link from "next/link";
import AddPetModal from "@/components/AddPetModal";

const DashboardPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      <div className="w-64 p-5 border-r">

        <h1 className="text-2xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="flex flex-col gap-4">

          

          <button
            onClick={() => setIsOpen(true)}
            className="text-left"
          >
            Add Pet
          </button>

          <Link href="/dashboard/my-pets">
            My Pets
          </Link>

          <Link href="/dashboard/adoptions">
            Adoptions
          </Link>

        </div>

      </div>
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold">
          Welcome to Dashboard
        </h2>
      </div>
      <AddPetModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        userEmail="user@gmail.com"
      />

    </div>
  );
};

export default DashboardPage;