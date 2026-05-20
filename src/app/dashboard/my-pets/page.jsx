"use client";

import { useEffect, useState } from "react";
import Pet from "@/components/Pet";
import Peti from "@/components/Peti";

const MyPets = () => {
  const [pets, setPets] = useState([]);

  const userEmail = "user@gmail.com";

  const fetchPets = () => {
    fetch(`http://localhost:5000/dashboard/my-pets?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {pets.map((pet) => (
        <Peti key={pet._id} pet={pet} onDelete={fetchPets} />
      ))}
    </div>
  );
};

export default MyPets;