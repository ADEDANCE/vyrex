"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-full mx-auto bg-white py-4 px-3 shadow">
      <div className=" flex justify-between items-center">
        <div className=" hidden lg:flex gap-4 text-gray-600 items-center">
          <Link
            href={""}
            className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
          >
            Features
          </Link>
          <Link
            href={""}
            className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
          >
            Pricing
          </Link>
          <Link
            href={""}
            className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
          >
            Testimony
          </Link>
        </div>

        <div className=" hidden lg:flex gap-4 text-gray-600 items-center">
          <Link
            href={""}
            className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
          >
            Log in
          </Link>
          <Button
            children="Start learning"
            className=" bg-blue-500 text-white rounded-2xl"
          />
        </div>

        {/* Hamburger menu for small screens */}
        <div className=" text-black dark:text-white flex flex-col gap-4 lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-4 flex flex-col gap-4 text-start text-black bg-white p-4 dark:bg-black dark:text-white ">
              <Link
                href={""}
                className=" hover:bg-blue-200 hover:rounded-xl py-2 px-4"
              >
                Log in
              </Link>
              <Button
                children="Start learning"
                className=" bg-blue-500 text-white rounded-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
