import CustomHeading from "./CustomHeading";
import CustomText from "./CustomText";

type HeaderProps = {
  mainText: string;
  subText?: string;
};

export default function SectionHeader({
  mainText = "Cool Header",
  subText,
}: HeaderProps) {
  return (
    <>
      {subText && (
        <CustomText
          variant="caption"
          weight="medium"
          className="text-center mb-6 text-primary"
        >
          {subText}
        </CustomText>
      )}
      <CustomHeading variant="h2" className="text-center">
        {mainText}
      </CustomHeading>
    </>
  );
}
