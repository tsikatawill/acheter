import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section">;

export default function SectionWrapper({ className, ...props }: SectionProps) {
  return (
    <section className={cn("pt-[70px] pb-[35px]", className)} {...props}>
      {props.children}
    </section>
  );
}
