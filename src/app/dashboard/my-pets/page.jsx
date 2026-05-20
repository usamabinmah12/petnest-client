"use client";

import { useEffect, useState } from "react";
import Peti from "@/components/Peti";
import { useSession } from "@/lib/auth-client";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const { data: session } = useSession();

  const userEmail = session?.user?.email;

  const fetchPets = async () => {
    if (!userEmail) return;

    const res = await fetch(
      `http://localhost:5000/dashboard/my-pets?email=${userEmail}`
    );

    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    if (userEmail) {
      fetchPets();
    }
  }, [userEmail]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      <div className="text-lg font-semibold">
        Length: {pets.length}
      </div>

      {pets.map((pet) => (
        <Peti key={pet._id} pet={pet} onDelete={fetchPets} />
      ))}

    </div>
  );
};

export default MyPets;