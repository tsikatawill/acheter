import CustomHeading from "@/components/CustomHeading";
import CustomText from "@/components/CustomText";

export default async function Home() {
  return (
    <main className="min-h-screen justify-between p-24 space-y-2">
      <CustomHeading variant="h2" className="underline">
        Acheter
      </CustomHeading>
      <CustomText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
        perferendis. Assumenda sequi facere repellendus repellat culpa ducimus!
        Nostrum consectetur, veniam sequi corporis odit tenetur suscipit,
        voluptates maxime laboriosam, ullam fugit!
      </CustomText>
    </main>
  );
}
