"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const UpdatePage = () => {

  const { id } = useParams();

  const [pet, setPet] = useState({
    petName: "",
    breed: "",
    age: "",
    image: "",
    location: "",
  });

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5000/pets/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch pet");
        return res.json();
      })
      .then((data) => setPet(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { _id, ...updateData } = pet;

    const res = await fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!res.ok) {
      console.error("Update failed");
      return;
    }

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-pink-100 flex items-center justify-center p-6">

  <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">

    <div className="text-center mb-8">
      <h1 className="text-4xl font-extrabold text-orange-500">
        Update Pet Information
      </h1>

      <p className="text-gray-500 mt-2">
        Edit your lovely pet details easily
      </p>
    </div>

    <form
      onSubmit={handleUpdate}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Pet Name
        </label>

        <input
          type="text"
          name="petName"
          value={pet.petName}
          onChange={handleChange}
          placeholder="Pet Name"
          className="border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none p-3 rounded-2xl transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Breed
        </label>

        <input
          type="text"
          name="breed"
          value={pet.breed}
          onChange={handleChange}
          placeholder="Breed"
          className="border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none p-3 rounded-2xl transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Age
        </label>

        <input
          type="number"
          name="age"
          value={pet.age}
          onChange={handleChange}
          placeholder="Age"
          className="border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none p-3 rounded-2xl transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Location
        </label>

        <input
          type="text"
          name="location"
          value={pet.location}
          onChange={handleChange}
          placeholder="Location"
          className="border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none p-3 rounded-2xl transition"
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Image URL
        </label>

        <input
          type="text"
          name="image"
          value={pet.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none p-3 rounded-2xl transition"
        />
      </div>

      <button
        className="md:col-span-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02] transition text-white font-bold py-4 rounded-2xl shadow-lg"
      >
        Update Pet
      </button>

    </form>

  </div>

</div>
  );
};

export default UpdatePage;