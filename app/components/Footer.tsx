import Link from "next/link";
export default function Footer() {
  const Companys = [
    { name: "About", href: "/About" },
    { name: "Contact", href: "" },
    { name: "Pricing", href: "/Pricing" },
  ];

  const Legal = [
    { name: "Terms of Use", href: "/Terms" },
    { name: "Refund Policy", href: "/RefundPolicy" },
    { name: "Privacy Policy", href: "/PrivacyPolicy" },
  ];
  return (
    <footer className=" w-full bg-[#00267C] border-t shadow  grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 items-center px-4 py-4">
      {/* first col */}
      <div className=" flex-col">
        <p className=" text-lg text-white">
          VYREX is the premium academy for video editors, motion designers and
          creators who want to build a real creative future.
        </p>
      </div>

      {/* second col */}
      <div className=" flex flex-col gap-4 text-start text-white mt-4">
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

      {/* last col */}
      <div className=" flex flex-col gap-4 text-start text-white mt-4">
        <h3 className=" text-lg font-bold">Company & Legal</h3>
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
