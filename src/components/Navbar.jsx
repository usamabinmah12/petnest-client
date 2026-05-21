'use client';

import { useSession } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();
  const user = session?.user;
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    try {
      
      const { signOut } = await import("@/lib/auth-client");
      await signOut();
      
      
      await refetch();
      router.refresh(); 
      router.push('/'); 
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  if (isPending) {
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
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">

        <Link href="/" className="text-2xl font-bold text-pink-500">
          PetNest
        </Link>

        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/pets" className="hover:text-pink-500 transition-colors text-2xl">
            All Pets
          </Link>
        </div>

        <Dropdown>
          
          <Dropdown.Trigger>
            <div className="font-bold">{user? "Hi "+ user.name : <div className="font-bold text-green-700">Login</div>}</div>
            <Avatar 
         
              name={isLoggedIn ? user.name : "User"} 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </Dropdown.Trigger>

          <Dropdown.Popover>
            {isLoggedIn && (
              <div className="px-3 pt-3 pb-2 border-b">
                <p className="text-sm font-semibold">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">
                  {user.email}
                </p>
              </div>
            )}

            <Dropdown.Menu>
              {isLoggedIn && (
                <>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Link href="/dashboard" className="block w-full">
                      <Label>Dashboard</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="profile" textValue="Profile">
                    <Link href="/profile" className="block w-full">
                      <Label>Profile</Label>
                    </Link>
                  </Dropdown.Item>
                </>
              )}

              <Dropdown.Item 
                id="auth" 
                textValue="Auth" 
                variant={isLoggedIn ? "danger" : "default"}
                onPress={isLoggedIn ? handleLogout : handleLogin}
              >
                <div className="flex items-center justify-between w-full">
                  <Label>
                    {isLoggedIn ? "Logout" : "Login"}
                  </Label>
                  {isLoggedIn && (
                    <ArrowRightFromSquare className="size-4 text-red-500" />
                  )}
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