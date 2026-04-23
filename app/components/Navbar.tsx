import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
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
      </div>
    </nav>
  );
}
