import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import TailwindConfig from "../../tailwind.config";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const theme = TailwindConfig.theme;
