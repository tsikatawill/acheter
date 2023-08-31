import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button">;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "py-3 px-8 rounded-md active:scale-95 transition-all duration-150",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
