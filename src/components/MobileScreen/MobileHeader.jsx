import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CiLogin } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Login from "../Login.jsx";
import useAuthContext from "@/hooks/use-hooks";
import Register from "../Register.jsx";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Loader from "../Common/Loader";
import Link from "next/link";

export default function MobileHeader() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    showLogin,
    setShowLogin,
    showSignUp,
    setShowSignUp,
  } = useAuthContext();

  const handleLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuRef = useRef(null);
  const [open, setOpen] = useState(0);
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isDrawerOpen, setIsDrawerOpen } = useAuthContext();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div className="w-full bg-white px-4 pt-4 text-black ">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between ">
            <Link href={"/"}>
              <div className="flex gap-4 ">
                <Image
                  src="/logo.png"
                  alt="logo Image"
                  height={600}
                  width={600}
                  className="h-12 w-12"
                />
              </div>
            </Link>

            <div className="flex gap-2">
              <Link href={"/Cart"}>
                <div>
                  <IoCartOutline className="h-8 w-8 mt-2" />
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2"
                  onClick={() => {
                    setIsDrawerOpen(!isDrawerOpen);
                  }}
                  aria-label="Toggle Menu"
                >
                  {isDrawerOpen ? (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                  ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                  )}
                </button>
                <Drawer open={isDrawerOpen}>
                  <Card
                    color="transparent"
                    shadow={false}
                    className="h-full scrollable-content overflow-auto w-full p-4"
                  >
                    <div className="mb-2 flex items-center gap-4 p-4">
                      <Image
                        src="/logo.png"
                        alt="logo Image"
                        height={600}
                        width={600}
                        className="h-12 w-12"
                      />
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-serif italic text-2xl"
                      >
                        Chosmic
                      </Typography>
                      <div className="ml-10">
                        <button
                          onClick={() => {
                            setIsDrawerOpen(!isDrawerOpen);
                          }}
                        >
                          <GoArrowRight className="text-2xl mt-1 font-bold" />
                        </button>
                      </div>
                    </div>
                    <div className="p-2">
                      <Input
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        label="Search"
                      />
                    </div>
                    <List>
                      <Accordion
                        open={open === 1}
                        icon={
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                              open === 2 ? "rotate-180" : ""
                            }`}
                          />
                        }
                      >
                        <ListItem className="p-0" selected={open === 1}>
                          <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                          >
                            <ListItemPrefix>
                              <IoPersonCircleOutline className="h-7 w-7 text-blue-700" />
                            </ListItemPrefix>
                            <Typography
                              color="blue-gray"
                              className="mr-auto font-normal"
                            >
                              My Account
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                          <List className="p-0">
                            <ListItem>
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              Saved Addresses
                            </ListItem>
                            <ListItem>
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              Profile
                            </ListItem>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      <hr className="my-2 border-blue-gray-50" />
                      <ListItem className=" border-b-0 p-3">
                        <ListItemPrefix>
                          <BiSolidOffer className="h-7 w-7 text-blue-700" />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          Offer Zone
                        </Typography>
                      </ListItem>
                      <ListItem className=" border-b-0 p-3">
                        <ListItemPrefix>
                          <ShoppingBagIcon className="h-7 w-7 text-blue-700" />
                        </ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          Sell On Chosmic
                        </Typography>
                      </ListItem>
                      <hr className="my-2 border-blue-gray-50" />
                      <ListItem>
                        <ListItemPrefix>
                          <UserCircleIcon className="h-7 w-7 text-blue-700" />
                        </ListItemPrefix>
                        Profile
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <Cog6ToothIcon className="h-7 w-7 text-blue-700" />
                        </ListItemPrefix>
                        Settings
                      </ListItem>

                      <ListItem onClick={handleLogin}>
                        <ListItemPrefix>
                          <PowerIcon className="h-7 w-7 text-blue-700" />
                        </ListItemPrefix>
                        Login
                      </ListItem>
                      {showLogin && <Login />}
                      {showSignUp && <Register />}
                    </List>
                  </Card>
                </Drawer>
              </div>
            </div>
          </div>
          <div className="">
            <div className="p-2">
              <Input
                icon={<CiSearch className="h-5 w-5" />}
                label="Search"
                className="bg-gray-100 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
