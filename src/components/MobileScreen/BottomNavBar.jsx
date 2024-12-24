import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrNotification } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { TbSettingsPlus } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
export default function BottomNavBar() {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 px-2">
      <div class="grid grid-cols-5 gap-4">
        <Link href={"/"} className="flex justify-center items-center">
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <IoHomeOutline className="text-gray-500 text-xl mb-1 mt-1  group-hover:text-blue-600 dark:group-hover:text-blue-500" />
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </button>
        </Link>
        <Link href={"/category"} className="flex justify-center items-center ">
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-2 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <BiCategory className="text-gray-500 text-xl mb-1 mt-1  group-hover:text-blue-600 dark:group-hover:text-blue-500" />
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Categories
            </span>
          </button>
        </Link>
        <Link
          href={"/notification"}
          className="flex justify-center items-center"
        >
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <GrNotification className="text-gray-500 text-xl mb-1 mt-1  group-hover:text-blue-600 dark:group-hover:text-blue-500" />
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Notification
            </span>
          </button>
        </Link>
        <Link href={"/"} className="flex justify-center items-center">
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Image
              src="/logo.png"
              alt="logo Image"
              height={600}
              width={600}
              className="h-7 w-7"
            />{" "}
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Delight
            </span>
          </button>
        </Link>
        <Link href={"/profile"} className="flex justify-center items-center">
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <CgProfile className="text-gray-500 text-xl mb-1 mt-1  group-hover:text-blue-600 dark:group-hover:text-blue-500" />
            <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Profile
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
