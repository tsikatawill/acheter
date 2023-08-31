import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";

type SectionProps = React.ComponentProps<"section">;

export default function SectionWithHeader({
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("pt-[70px] pb-[35px]", className)} {...props}>
      {props.children}
    </section>
  );
}
