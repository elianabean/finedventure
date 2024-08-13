'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import React from "react";
import {User} from "@nextui-org/react";
  
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
        <User
            name="Login"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            className="[background:rgba(156,224,213,0.60)] rounded-[39px] text-[#0A7968] font-lato text-base font-semibold pr-4"
          />
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