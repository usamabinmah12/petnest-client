import { Card, Button, Badge } from "@heroui/react";
import Image from "next/image";

const IdPage = async ({ params }) => {
  const { id } =await  params;

  const res = await fetch(`http://localhost:5000/pets/${id}`, {
    cache: "no-store",
  });

  const pet = await res.json();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">

      <Card className="w-full max-w-3xl p-6 flex flex-col items-center gap-6">

        <div className="relative w-[280px] h-[280px]">
          <Image
            src={pet.image}
            alt={pet.petName}
            fill
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

        <Button color="primary" className="w-full md:w-1/2">
          Adopt Now
        </Button>

      </Card>

    </div>
  );
};

export default IdPage;