import BrandCard from "./BrandCard";
import Container from "./Container";
import SectionWrapper from "./SectionWrapper";

export default function BrandsSection() {
  return (
    <SectionWrapper>
      <Container className="flex flex-wrap justify-center">
        {[
          {
            name: "Calvin Klein",
            logo: "/images/calvin-klien.png",
            slug: "ck",
            image: "/images/brand1.jpg",
          },
          {
            name: "Abercrombie & Fitch",
            logo: "/images/abercombie.png",
            slug: "ck",
            image: "/images/brand2.jpg",
          },
          {
            name: "Rolex",
            logo: "/images/rolex.png",
            slug: "ck",
            image: "/images/brand3.jpg",
          },
          {
            name: "Dolce & Gabanna",
            logo: "/images/d&g.png",
            slug: "ck",
            image: "/images/brand4.jpg",
          },
          {
            name: "Polo",
            logo: "/images/polo.png",
            slug: "ck",
            image: "/images/brand5.jpg",
          },
          {
            name: "Levi's",
            logo: "/images/levis.png",
            slug: "ck",
            image: "/images/brand6.jpg",
          },
          {
            name: "Versace",
            logo: "/images/versace.png",
            slug: "ck",
            image: "/images/brand7.jpg",
          },
          { name: "YSL", logo: "/images/ysl.png", image: "/images/brand8.jpg" },
        ].map((brand, idx) => (
          <BrandCard key={idx} {...brand} />
        ))}
      </Container>
    </SectionWrapper>
  );
}
