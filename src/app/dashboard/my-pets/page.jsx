"use client";

import { useEffect, useState } from "react";
import Peti from "@/components/Peti";
import { useSession } from "@/lib/auth-client";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const { data: session } = useSession();

  const fetchPets = async () => {
    const email = session?.user?.email;

    if (!email) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/dashboard/my-pets?email=${email}&t=${Date.now()}`
      );

      const data = await res.json();
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    if (!session?.user?.email) return;

    fetchPets();
  }, [session?.user?.email]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      
      {pets.map((pet) => (
        <Peti key={pet._id} pet={pet} onDelete={fetchPets} />
      ))}

    </div>
  );
};

export default MyPets;