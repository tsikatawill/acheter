import Container from "./Container";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import SectionWithHeader from "./SectionWrapper";

export default function NewArrivalsSection() {
  return (
    <SectionWithHeader>
      <Container>
        <SectionHeader mainText="New Arrivals" />

        <div className="flex gap-5 overflow-x-scroll">
          {Array.from({ length: 4 }).map((item, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </Container>
    </SectionWithHeader>
  );
}
