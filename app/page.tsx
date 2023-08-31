import BrandLogos from "@/components/BrandLogos";
import Header from "@/components/Header";
import NewArrivalsSection from "@/components/NewArrivalsSection";

export default async function Home() {
  return (
    <>
      <Header />
      <BrandLogos />
      <NewArrivalsSection />
    </>
  );
}
