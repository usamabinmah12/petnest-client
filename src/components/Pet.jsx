import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Pet = ({ pet }) => {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm flex flex-col items-center text-center p-6 gap-4">

        <div className="relative h-[180px] w-[180px] overflow-hidden rounded-2xl">
          <Image
            src={pet.image}
            alt={pet.petName}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-3">

          <h2 className="text-2xl font-bold">
            {pet.petName}
          </h2>

          <p className="text-sm text-gray-500">
            {pet.description}
          </p>

          <div className="text-sm">
            <p className="font-medium">{pet.breed}</p>
            <p className="text-gray-500">{pet.location}</p>
          </div>

          <div className="flex gap-3 mt-2">

            <Link href={`/pets/${pet._id}`}>
              <Button variant="danger-soft">
                See details
              </Button>
            </Link>

            <Link href={``}>
              
              <Button color="primary">
                Adopt Now
              </Button>
            </Link>

          </div>

        </div>

      </Card>
    </div>
  );
};

export default Pet;