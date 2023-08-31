import React from "react";
import { HeadingVariants } from "@/lib/types";
import { cn, compare } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant: HeadingVariants;
};

export default function CustomHeading({
  variant = "h2",
  ...props
}: HeadingProps) {
  const Heading = (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(variant, props);

  const h = compare(variant);

  return (
    <Heading
      className={cn(
        "font-bold",
        {
          "text-[54px]": h("h1"),
          "text-[40px]": h("h2"),
          "text-[32px]": h("h3"),
          "text-2xl": h("h4"),
          "text-lg": h("h5"),
          "text-base": h("h6"),
        },
        props.className
      )}
    >
      {props.children}
    </Heading>
  );
  // return React.createElement();
}
