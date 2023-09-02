import { FaMagnifyingGlass } from "react-icons/fa6";
import Button from "./Button";
import Container from "./Container";
import CustomHeading from "./CustomHeading";
import SectionWrapper from "./SectionWrapper";

export default function DepartmentsSection() {
  return (
    <SectionWrapper>
      <Container className="flex overflow-x-scroll gap-[30px]">
        {[
          { name: "Men", image: "/images/product1.jpg" },
          { name: "Women", image: "/images/product2.jpg" },
          { name: "Kids", image: "/images/product1.jpg" },
        ].map((department) => (
          <div
            key={department.name}
            className="max-w-[360px] w-full flex-shrink-0 h-[495px] relative rounded-md overflow-hidden"
            style={{
              background: `url(${department.image}) center center/cover`,
            }}
          >
            <div className="absolute inset-0 group bg-black bg-opacity-0 hover:bg-opacity-40 text-center grid place-content-center transition-all duration-150">
              <CustomHeading variant="h3" className="text-white mb-4">
                {department.name}
              </CustomHeading>

              <Button className="bg-white hover:bg-primaryLight text-black opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-out flex items-center gap-2">
                <FaMagnifyingGlass />
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </SectionWrapper>
  );
}
