import BestWeekendSellersSection from "@/components/BestWeekendSellersSection";
import BrandLogos from "@/components/BrandLogos";
import BrandsSection from "@/components/BrandsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import Header from "@/components/Header";
import NewArrivalsSection from "@/components/NewArrivalsSection";

export default async function Home() {
  return (
    <>
      <Header />
      <BrandLogos />
      <NewArrivalsSection />
      <DepartmentsSection />
      <BestWeekendSellersSection />
      <BrandsSection />
    </>
  );
}
