import Image from "next/image";
import Container from "./Container";

export default function BrandLogos() {
  const logos = [
    {
      brand: "Adidas",
      image: "/images/adidas.svg",
    },
    {
      brand: "Puma",
      image: "/images/puma.svg",
    },
    {
      brand: "Lacoste",
      image: "/images/lacoste.svg",
    },
  ];
  return (
    <section>
      <Container className="flex justify-around h-[200px] items-center">
        {logos.map((logo) => (
          <Image
            key={logo.brand}
            src={logo.image}
            title={logo.brand}
            alt={logo.brand}
            width={150}
            height={100}
          />
        ))}
      </Container>
    </section>
  );
}
