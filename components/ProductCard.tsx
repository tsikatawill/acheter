import Image from "next/image";
import CustomText from "./CustomText";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import Button from "./Button";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="max-w-[270px] w-full flex-shrink-0 rounded-md overflow-hidden">
      <div className="relative">
        <Image
          src="/images/product1.jpg"
          alt="product"
          width={270}
          height={300}
        />

        <div className="absolute opacity-0 hover:opacity-100 transition-all duration-150 ease-out bg-black bg-opacity-40 inset-0 grid place-content-center">
          <div className="flex items-center gap-6">
            <Link
              href={"/products/woman-in-red"}
              className="w-8 h-8 rounded-full grid place-content-center bg-white hover:bg-primaryLight"
            >
              <FaMagnifyingGlass size={12} />
            </Link>

            <button className="w-8 h-8 rounded-full grid place-content-center bg-white hover:bg-primaryLight">
              {/* <AiFillHeart color="red" size={12} />  */}
              <AiOutlineHeart size={12} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 bg-neutral-100">
        <div className="flex justify-between gap-1 mb-3">
          <CustomText variant="subtitle" weight="medium">
            Versace Bag Ipsum
          </CustomText>

          <CustomText
            variant="subtitle"
            weight="bold"
            className="text-primary flex-shrink-0 w-fit"
          >
            $50
          </CustomText>
        </div>

        <Button className="bg-primary text-white py-1 px-4 flex items-center gap-1">
          Add to cart <FaCartShopping />
        </Button>
      </div>
    </div>
  );
}
