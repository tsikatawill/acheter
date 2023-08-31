import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}

export function compare<T>(value: T) {
  return (cmp: T) => value === cmp;
}
