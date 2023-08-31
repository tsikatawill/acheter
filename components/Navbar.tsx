"use client";

import Link from "next/link";
import Container from "./Container";
import CustomHeading from "./CustomHeading";
import CustomText from "./CustomText";
import { FaCartShopping, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Navbar({
  hideOnHome = false,
}: {
  hideOnHome?: boolean;
}) {
  const route = usePathname();

  if (route === "/" && hideOnHome) return null;

  return (
    <nav>
      <Container className="py-[25px] flex justify-between items-center">
        <CustomHeading variant="h5">
          <Link href="/" className="font-bold text-lg">
            Acheter
          </Link>
        </CustomHeading>

        <div className="hidden md:flex gap-4 items-center">
          {[
            "New",
            "Tops",
            "Bottoms",
            "Kids",
            "Accessories",
            "Collections",
            "Sale",
          ].map((link, idx) => (
            <CustomText
              key={idx}
              variant="subtitle"
              className="hover:font-semibold transition-all duration-150"
            >
              <Link href={`/products/${link.toLowerCase()}`}>{link}</Link>
            </CustomText>
          ))}
        </div>

        <div className="flex gap-4">
          <FaMagnifyingGlass size={20} />

          <div className="relative">
            <FaCartShopping size={20} />

            <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-600 p-2 grid place-content-center rounded-full">
              <small className="text-[5px] text-white">5</small>
            </div>
          </div>

          <FaUser size={20} />
        </div>
      </Container>
    </nav>
  );
}
