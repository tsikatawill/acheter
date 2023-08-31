import Container from "./Container";
import SectionHeader from "./SectionHeader";
import SectionWithHeader from "./SectionWithHeader";

export default function NewArrivalsSection() {
  return (
    <SectionWithHeader>
      <Container>
        <SectionHeader mainText="New Arrivals" />
      </Container>
    </SectionWithHeader>
  );
}
