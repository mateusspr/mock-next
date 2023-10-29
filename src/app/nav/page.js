import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";


function Nav() {
  return (
    <nav className=''>
      <Navbar className='p-10 justify-center'>
        <NavbarBrand position="static" >
          <Link href='/'>
            <p className="font-bold text-inherit">Portifólio</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href="/blog" aria-current="page">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/gallery">
              Galeria
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              Sobre
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </nav>
  );
}

export default Nav;