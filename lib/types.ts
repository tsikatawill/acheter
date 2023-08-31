import { ClassValue } from "clsx";

export type TextVariants = "subtitle" | "caption" | "body";
export type TextWeights = "regular" | "medium" | "bold";

export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextStyle = {
  weight: Record<TextWeights, ClassValue>;
  variant: Record<TextVariants, ClassValue>;
};
