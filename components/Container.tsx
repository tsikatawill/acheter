import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1160px] px-[10px] mx-auto", className)}
      {...props}
    >
      {props.children}
    </div>
  );
}
