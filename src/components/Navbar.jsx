import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Avatar, Button, Dropdown, Label} from "@heroui/react";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <div className="font-bold text-2xl">
                <Link href={'/'}> <button>PetNest</button></Link>
               
            </div>
             <div className="">
                <Link href={'/pets'} > <button>All Pets</button></Link>
            </div>
            <div className="">
                 <Dropdown>
      <Dropdown.Trigger className="rounded-2xl p-2">
        <Avatar>
           <Button >User</Button>
          
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">Usama</p>
              <p className="text-xs leading-none text-muted">usama@example.com</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
           <Link href={'/dashboard'}> <Label>Dashboard</Label> </Link>  
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
         
          <Dropdown.Item id="new-project" textValue="New project">
            
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
            </div>
        </div>
    );
};

export default Navbar;