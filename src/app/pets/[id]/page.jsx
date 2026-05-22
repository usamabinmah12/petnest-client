import { Card, Button, Badge } from "@heroui/react";
import Image from "next/image";
// import { auth } from "@/lib/auth";
import { cookies, headers } from 'next/headers';
import { auth } from "@/lib/auth";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import NoUser from "@/components/NoUser";


const IdPage = async ({ params }) => {
  const { id } = await params;
  // const { data: session } = await useSession();
  // const user = session?.user;
  // console.log(user, "details");
  let token = null;
  try {
    const nextHeaders = await headers();
    const tokenData = await auth.api.getToken({
      headers: nextHeaders
    });
    console.log("tokenData:", tokenData);
    token = tokenData?.token;
  } catch (err) {
    console.error("Error fetching token:", err);
  }

  console.log("Extracted token:", token ? "Found" : "Not Found");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
   
    headers: token ? {
      authorization: `Bearer ${token}`
    } : {}
  });

  const pet = await res.json();
  const handleClick = () => {

  }

  return (
    <div>
      
         <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">

        <Card className="w-full max-w-3xl p-6 flex flex-col items-center gap-6">

          <div className="relative ">
            <Image
              src={pet.image}
              alt={pet.petName || "Pet"}
              width={300}
              height={200}
              className="object-cover rounded-2xl"
            />
          </div>

          <h1 className="text-3xl font-bold text-pink-500">
            {pet.petName}
          </h1>

          <p className="text-center text-gray-600">
            {pet.description}
          </p>

          <div className="grid grid-cols-2 gap-4 w-full">

            <Card className="p-3">
              <p className="text-sm text-gray-500">Breed</p>
              <p className="font-semibold">{pet.breed}</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Species</p>
              <p className="font-semibold">{pet.species}</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-semibold">{pet.age}</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-semibold">{pet.gender}</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold">{pet.location}</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Adoption Fee</p>
              <p className="font-semibold">{pet.adoptionFee} BDT</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Health</p>
              <p className="font-semibold">{pet.healthStatus}</p>
            </Card>

            <Card className="p-3">
              <p className="text-sm text-gray-500">Vaccination</p>
              <p className="font-semibold">{pet.vaccinationStatus}</p>
            </Card>

          </div>

          <div className="text-sm text-gray-500">
            Owner: {pet.ownerEmail}
          </div>
          {pet.isAdopted ? (
            <Button
              color="primary"
              className="w-full md:w-1/2"
              isDisabled
            >
              Already Adopted
            </Button>
          ) : (
            <Link href={`/adopt/${pet._id}`} className="w-full md:w-1/2">
              <Button
                color="primary"
                className="w-full"
              >
                Adopt Now
              </Button>
            </Link>
          )}

        </Card>

      </div> 
    </div>

  );
};

export default IdPage;