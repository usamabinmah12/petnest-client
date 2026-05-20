'use client';

import { useState } from "react";
import Link from "next/link";
import AddPetModal from "@/components/AddPetModal";
import { useSession } from "@/lib/auth-client";

const DashboardPage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen container mx-auto">

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

        <p className="text-gray-500 mt-2">
          {user?.email ? `Logged in as ${user.email}` : "Loading user..."}
        </p>
      </div>

      <AddPetModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        userEmail={user?.email || ""}
      />

    </div>
  );
};

export default DashboardPage;