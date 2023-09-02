import Image from "next/image";
import Link from "next/link";

export default function BrandCard({
  image,
  logo,
  name,
  slug,
}: {
  image: string;
  name: string;
  logo: string;
  slug: string;
}) {
  return (
    <Link
      href={`/products/brands/${slug}`}
      className="max-w-[285px] relative h-[340px] w-full flex-shrink-0 bg-neutral-500 [&:nth-child(even)]:bg-red-900 text-white fontbold text-xl"
      style={{ background: `url(${image}) center center/cover no-repeat` }}
    >
      <div className="bg-black group bg-opacity-0 hover:bg-opacity-50 absolute group inset-0 grid place-content-center transition-all duration-200 ease-out">
        <Image
          className="group-hover:invert scale-90 group-hover:scale-100 transition-all duration-500 ease-out"
          src={logo}
          width={150}
          height={150}
          alt="rolex"
        />
      </div>
    </Link>
  );
}
