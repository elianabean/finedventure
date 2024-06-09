import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link,
  } from "@nextui-org/react";
  import React from "react";
  
  export default function Header() {
    return (
      <Navbar className="bg-transparent fixed py-[50px]" maxWidth="full" isBlurred={false}>
        <NavbarBrand className="px-[80px]">
            <p className="text-primary font-raleway text-[55px] italic font-bold leading-normal">FinEdVenture</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-[53px] mr-[260px]" justify="start">
            <NavbarItem>
                    <div className="flex flex-row shrink-0 justify-center align-center rounded-[20px] border-[1px] border-solid bg-[#ECFFF6]  py-[9px] px-[20px]">
                        <p className="text-primary font-lato text-3xl font-medium leading-normal ">Our Team</p>
                    </div>
            </NavbarItem>
            <NavbarItem>
                    <div className="flex flex-row shrink-0 justify-center align-center rounded-[20px] border-[1px] border-solid bg-[#ECFFF6]  py-[9px] px-[20px]">
                        <p className="text-primary font-lato text-3xl font-medium leading-normal ">Financial Literacy</p>
                    </div>
            </NavbarItem>
            <NavbarItem>
                    <div className="flex flex-row shrink-0 justify-center align-center rounded-[20px] border-[1px] border-solid bg-[#ECFFF6]  py-[9px] px-[20px]">
                        <p className="text-primary font-lato text-3xl font-medium leading-normal ">Business Competitons</p>
                    </div>
            </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }