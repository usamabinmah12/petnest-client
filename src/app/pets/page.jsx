'use client';

import Pet from '@/components/Pet';
import React, { useEffect, useState } from 'react';
import { Spinner } from "@heroui/react";

const AllPets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className='container mx-auto px-4 py-8 '>
            <div className='grid grid-cols-3'>
                {
                    pets.map(pet => <Pet
                        key={pet._id}
                        pet={pet}
                    />)
                }
            </div>
        </div>
    );
};

export default AllPets;