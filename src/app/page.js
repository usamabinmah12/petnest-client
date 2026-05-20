import Banner from "@/components/Banner";
import Pet from "@/components/Pet";
import Image from "next/image";

export default async function Home() {
    const res = await fetch('http://localhost:5000/pets');
    const allPets = await res.json();
    
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div>
        
      </div>
       <div className='container mx-auto grid grid-cols-3'>
            {
                allPets.slice(0,7).map(pet => <Pet
                key={pet._id}
                     pet ={pet}></Pet> )
            }
            
        </div>
    </div>
  );
}
