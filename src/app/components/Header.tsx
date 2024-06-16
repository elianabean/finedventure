'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import React from "react";
  
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Our Team",
    "Financial Literacy",
    "Business Competitions",
  ];

  return (
    <Navbar className="bg-transparent fixed h-[10vh]" maxWidth="full" isBlurred={true} onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand className="px-[80px]">
          <p className="text-primary font-raleway 3xl:text-[55px] xl:text-[35px] italic font-bold leading-normal">FinEdVenture</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-[53px]" justify="center">
          <NavbarItem>
            <Link href="#">
              <p className="text-primary font-lato 3xl:text-3xl xl:text-[20px] font-medium leading-normal ">Our Team</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              <p className="text-primary font-lato 3xl:text-3xl xl:text-[20px] font-medium leading-normal ">Financial Literacy</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              <p className="text-primary font-lato 3xl:text-3xl xl:text-[20px] font-medium leading-normal ">Business Competitons</p>
            </Link>
          </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
      <NavbarItem>
            <Button as={Link} className="border-primary border-1 3xl:text-3xl xl:text-[20px] p-6 bg-transparent text-primary" href="#" variant="flat">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" className=" 3xl:text-3xl xl:text-[20px] p-6" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}