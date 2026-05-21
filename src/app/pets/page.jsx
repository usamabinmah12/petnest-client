'use client';

import Pet from '@/components/Pet';
import React, { useEffect, useState } from 'react';
import { Spinner } from "@heroui/react";

const AllPets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [species, setSpecies] = useState("all");

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const res = await fetch('http://localhost:5000/pets');
                const data = await res.json();
                setPets(data);
            } catch (error) {
                console.error("Error fetching pets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center justify-center py-7 m-16">
                <Spinner size="lg" color="danger" />
                <p className="mt-4 text-gray-500 text-lg">Loading adorable pets...</p>
            </div>
        );
    }

    const filteredPets = pets.filter((pet) => {
        const matchName = pet.petName
            ?.toLowerCase()
            .includes(search.toLowerCase());

        const matchSpecies =
            species === "all" ||
            pet.species?.toLowerCase() === species.toLowerCase();

        return matchName && matchSpecies;
    });

    return (
        <div className='container mx-auto px-4 py-8 my-10'>

            <div className="mb-6 flex flex-col md:flex-row gap-3">

                <input
                    type="text"
                    placeholder="Search pets by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 border rounded-lg font-semibold text-black"
                />

                <select
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                    className="w-full md:w-60 p-3 border rounded-lg"
                >
                    <option value="all">All Species</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                </select>

            </div>

            <div className='grid grid-cols-3 gap-4'>
                {
                    filteredPets.map(pet => (
                        <Pet
                            key={pet._id}
                            pet={pet}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllPets;