import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";


function Nav() {
  return (
    <>
      <Navbar className='p-10 justify-center'>
        <NavbarBrand position="static" >
          <p className="font-bold text-inherit">Free Project</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/dashboard">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/cards" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default Nav;