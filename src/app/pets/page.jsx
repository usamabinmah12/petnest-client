import Pet from '@/components/Pet';
import React from 'react';

const AllPets = async() => {
    const res = await fetch('http://localhost:5000/pets');
    const allPets = await res.json();
    return (
        <div className='container mx-auto grid grid-cols-3'>
            {
                allPets.map(pet => <Pet
                key={pet._id}
                     pet ={pet}></Pet> )
            }
            
        </div>
    );
};

export default AllPets;