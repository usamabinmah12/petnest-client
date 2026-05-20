import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">

        <Link href="/" className="text-2xl font-bold text-pink-500">
          PetNest
        </Link>

        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link href="/pets" className="hover:text-pink-500">
            All Pets
          </Link>
        </div>
          <Dropdown>
          <Dropdown.Trigger>
            <Avatar name="User" className="cursor-pointer" />
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <div className="px-3 pt-3 pb-2 border-b">
              <p className="text-sm font-semibold">Usama</p>
              <p className="text-xs text-gray-500">usama@example.com</p>
            </div>

            <Dropdown.Menu>

              <Dropdown.Item id="profile" textValue="Profile">
                <Label>Profile</Label>
              </Dropdown.Item>

              <Dropdown.Item id="dashboard" textValue="Dashboard">
                <Link href="/dashboard">
                  <Label>Dashboard</Label>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                <div className="flex items-center justify-between w-full">
                  <Label>Logout</Label>
                  <ArrowRightFromSquare className="size-4 text-red-500" />
                </div>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

      </div>
    </nav>
  );
};

export default Navbar;