"use client";

import { useSession } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Pet = ({ pet }) => {
  const [isAdopted, setIsAdopted] = useState(false);
  const {data : session }= useSession();
  const user = session?.user;
  console.log("user" , user)
  useEffect(() => {
  
    if (pet?.isAdopted === true || pet?.adoptionStatus === "adopted") {
      setIsAdopted(true);
    }
  }, [pet]);

  if (!pet) return null;

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm flex flex-col items-center text-center p-6 gap-4">
        <div className="relative h-[180px] w-[180px] overflow-hidden rounded-2xl">
          <Image
            src={pet.image || "https://via.placeholder.com/180x180?text=No+Image"}
            alt={pet.petName || "Pet"}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold">{pet.petName}</h2>
          <p className="text-sm text-gray-500">{pet.description}</p>

          <div className="text-sm">
            <p className="font-medium">{pet.breed}</p>
            <p className="text-gray-500">{pet.location}</p>
          </div>

          <div className="flex gap-3 mt-2">
            {
  user ? (
    <Link href={`/pets/${pet._id}`}>
      <Button variant="danger-soft">
        See detail
      </Button>
    </Link>
  ) : (
    <Link href={`/pets/no-user`}>
      <Button variant="danger-soft">
        See detail
      </Button>
    </Link>
  )
}
          
           {isAdopted ? <Button variant="danger">Already Adopted</Button> :<Link href={`/adopt/${pet._id}`}>
              <Button
                disabled={isAdopted}
                className={
                  isAdopted
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:scale-[1.02] transition"
                }
              >
                Adopt Now
              </Button>
            </Link> }
            
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pet;