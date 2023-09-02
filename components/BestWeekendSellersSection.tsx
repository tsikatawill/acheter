import Container from "./Container";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

export default function BestWeekendSellersSection() {
  return (
    <SectionWrapper>
      <SectionHeader mainText="Best Weekend Sellers" subText="TOP SELLING" />

      <Container>
        <div className="flex gap-5 flex-wrap">
          {Array.from({ length: 8 }).map((_product, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
