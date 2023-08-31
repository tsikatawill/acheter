import { TextVariants, TextWeights } from "@/lib/types";
import { cn, compare } from "@/lib/utils";

type TextProps = React.ComponentProps<"p"> & {
  variant?: TextVariants;
  weight?: TextWeights;
};

export default function CustomText({
  variant = "body",
  weight = "regular",
  ...props
}: TextProps) {
  const v = compare(variant);
  const w = compare(weight);

  return (
    <p
      className={cn(
        {
          "text-base": v("subtitle"),
          "text-xs": v("caption"),
          "text-sm": v("body"),
          "font-normal": w("regular"),
          "font-semibold": w("medium"),
          "font-bold": w("bold"),
        },
        props.className
      )}
    >
      {props.children}
    </p>
  );
}
