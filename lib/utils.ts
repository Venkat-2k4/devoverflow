import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getDeviconClassName = (techName: string) => {
  const noralizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[noralizedTechName]
    ? `${techMap[noralizedTechName]} colored`
    : "devicon-devicon-plain";
};
