import React from "react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import useAuthContext from "@/hooks/use-hooks";
import Login from "@/components/Login";
import Register from "../Register";
import { BsBoxSeam } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { PiSignOutFill } from "react-icons/pi";
import { GrNotification } from "react-icons/gr";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
export default function MiniHeader() {
  const [openMenu, setOpenMenu] = useState(false);
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

  return (
    <div className="relative bg-[#142962] lg:w-full md:w-full md:block hidden text-white lg:h-12 md:h-20 lg:px-16 md:px-12 font-serif">
      <div className="lg:flex lg:flex-row lg:gap-10 md:flex md:flex-col justify-between">
        <div className="md:justify-center md:text-center lg:justify-left lg:text-left">
          <h1 className="text-white lg:w-full lg:mx-0 md:mx-auto font-light py-4 text-[12px]">
            Welcome To Chosmic
          </h1>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-2  md:flex md:flex-row md:gap-2 ">
          <div className="lg:py-3">
            <select
              name="countries"
              className="bg-transparent lg:outline-none text-xs font-light pl-1 text-white h-7 w-20"
            >
              <option value="en" data-title="English" className="text-black">
                English
              </option>
              <option className="text-black" value="am" data-title="Assamese">
                Assamese
              </option>
              <option className="text-black" value="bn" data-title="Bengali">
                Bengali
              </option>
              <option className="text-black" value="hn" data-title="Hindi">
                Hindi
              </option>
              <option className="text-black" value="kn" data-title="kannada">
                kannada
              </option>
              <option className="text-black" value="mt" data-title="Marathi">
                Marathi
              </option>
              <option className="text-black" value="tm" data-title="Tamil">
                Tamil
              </option>
              <option className="text-black" value="od" data-title="Odia">
                Odia
              </option>
            </select>
          </div>
          <div className="lg:py-3">
            <select
              name="countries"
              className="bg-transparent outline-none text-xs font-light uppercase pl-1   text-white h-7 lg:w-12 "
            >
              <option value="INR" className="text-black" data-title="INR">
                INR
              </option>
              <option value="USD" className="text-black" data-title="USD">
                USD
              </option>
              <option value="EUR" className="text-black" data-title="EUR">
                EUR
              </option>
            </select>
          </div>
          <div className="lg:flex lg:gap-1 lg:py-3 lg:ml-2  md:flex md:gap-1 ">
            <FaLocationDot className="text-white mt-1 font-normal text-[13px] uppercase hover:cursor-pointer" />
            <h1 className="text-white font-light mt-1 text-[12px]  hover:cursor-pointer">
              Location
            </h1>
          </div>
          <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
              <div className="flex gap-1 lg:py-1 lg:h-8 md:h-7 lg:mt-2 border-l-1 ">
                <IoPersonSharp className="text-white ml-2 mt-1 font-normal text-[13px] uppercase hover:cursor-pointer" />
                <h1 className="text-white font-light mt-1 text-[12px]   hover:cursor-pointer ">
                  My Account
                </h1>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform mt-1  ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </div>
            </MenuHandler>
            <MenuList>
              <div>
                <MenuItem className="flex gap-2">
                  <Typography>
                    <IoPersonSharp className="mt-2 font-normal text-[13px]" />
                  </Typography>
                  <Typography>Profile</Typography>
                </MenuItem>
              </div>
              <div>
                <MenuItem className="flex gap-2">
                  <Typography>
                    <BsBoxSeam className="text-[13px] mt-2" />
                  </Typography>
                  <Typography>Order</Typography>
                </MenuItem>
              </div>
              <div>
                <MenuItem className="flex gap-2">
                  <Typography>
                    <FaHeart className="mt-1 font-normal text-[15px]" />
                  </Typography>
                  <Typography>Wish List</Typography>
                </MenuItem>
              </div>
              <div>
                <MenuItem className="flex gap-2">
                  <Typography>
                    <FaFireFlameCurved className="mt-2 font-normal text-[13px] hover:cursor-pointer" />
                  </Typography>
                  <Typography>Reward</Typography>
                </MenuItem>
              </div>
              <div>
                <MenuItem className="flex gap-2">
                  <Typography>
                    <FaWallet className="mt-2 font-normal text-[13px] hover:cursor-pointer" />
                  </Typography>
                  <Typography>Wallet</Typography>
                </MenuItem>
              </div>
              <div>
                <MenuItem className="flex gap-2">
                  <Typography>
                    <GrNotification className="mt-2 font-normal text-[13px] hover:cursor-pointer" />
                  </Typography>
                  <Typography>Notification</Typography>
                </MenuItem>
              </div>
            </MenuList>
          </Menu>
          <div>
            <button
              className="flex gap-1  lg:py-1 lg:h-8 md:h-7 lg:mt-2 border-l-1 login-button  "
              onClick={handleLogin}
            >
              <FaLock className="text-white mt-1 ml-2  font-normal text-[13px] hover:cursor-pointer" />
              <h1 className="text-white font-light mt-1 text-[12px] hover:cursor-pointer ">
                Sign In / Register
              </h1>
            </button>
            {showLogin && <Login />}
            {showSignUp && <Register />}
          </div>
          <div className="flex gap-1 lg:py-1 lg:h-8 md:h-7 lg:mt-2 border-l-1">
            <FaLock className="text-white mt-1 ml-2  font-normal text-[13px] uppercase hover:cursor-pointer" />
            <h1 className="text-white font-light mt-1 text-[12px]  hover:cursor-pointer ">
              Register As A Seller
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
