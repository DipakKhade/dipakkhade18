
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
