import Link from "next/link";
export default function Footer() {
  const Platforms = [
    { name: "Features", href: "/" },
    { name: "Courses", href: "" },
    { name: "Pricing", href: "/Pricing" },
  ];

  const Companys = [
    { name: "About", href: "/" },
    { name: "Blog", href: "" },
    { name: "Careers", href: "/Pricing" },
  ];

  const Legal = [
    { name: "Privacy", href: "/" },
    { name: "Terms", href: "" },
    { name: "Contact", href: "/Contact" },
  ];
  return (
    <footer className=" w-full bg-blue-600 border-t shadow  grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 items-center px-4 py-4">
      {/* first col */}
      <div className=" flex-col">
        <p className=" text-lg text-white">
          VYREX is the premium academy for video editors, motion designers and
          creators who want to build a real creative future.
        </p>
      </div>

      {/* second col */}
      <div className=" grid grid-cols-2 gap-10 mt-4">
        {/* Left side */}
        <div className=" flex flex-col gap-4 text-start text-white">
          <h3 className=" text-lg font-bold">Platform</h3>
          {Platforms.map((platform) => (
            <Link
              key={platform.href}
              href={platform.href}
              className="hover:text-gray-400"
            >
              {platform.name}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className=" flex flex-col gap-4 text-start text-white">
          <h3 className=" text-lg font-bold">Company</h3>
          {Companys.map((Company) => (
            <Link
              key={Company.href}
              href={Company.href}
              className="hover:text-gray-400"
            >
              {Company.name}
            </Link>
          ))}
        </div>
      </div>

      {/* last col */}
      <div className=" flex flex-col gap-4 text-start text-white mt-4">
        <h3 className=" text-lg font-bold">Platform</h3>
        {Legal.map((legal) => (
          <Link
            key={legal.href}
            href={legal.href}
            className="hover:text-gray-400"
          >
            {legal.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
