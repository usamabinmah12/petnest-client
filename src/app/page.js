import Banner from "@/components/Banner";
import Pet from "@/components/Pet";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const res = await fetch('http://localhost:5000/pets');
    const allPets = await res.json();
    
  return (
    <div className="container mx-auto my-6">
      <Banner></Banner>
      <div className="text-center mb-12 space-y-6 gap-5 pt-6" >
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-8 h-0.5 bg-pink-400"></div>
                            <span className="text-pink-500 font-semibold uppercase tracking-wider text-sm">
                                Meet Our Friends
                            </span>
                            <div className="w-8 h-0.5 bg-pink-400"></div>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Featured <span className="text-pink-500">Pets</span>
                    </h2>
                    
                    <p className="text-gray-500 max-w-md mx-auto">
                        These lovely pets are waiting for their forever homes
                    </p>
                </div>
       <div className='container mx-auto grid grid-cols-3'>
            {
                allPets.slice(0,7).map(pet => <Pet
                key={pet._id}
                     pet ={pet}></Pet> )
            }
            
        </div>
        <div className="flex items-center justify-center">
          <Link href={"/pets"}> <Button>See all Pets</Button></Link>
        </div>
        
    </div>
  );
}
