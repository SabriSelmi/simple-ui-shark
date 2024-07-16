import { theme } from "@/utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const colorVariants = Object.keys(theme.colors).reduce(
  (acc: Record<string, string>, colorKey: string) => {
    const colorGroup = theme.colors[colorKey as keyof typeof theme.colors];
    if (typeof colorGroup === "object") {
      Object.keys(colorGroup).forEach((shade) => {
        acc[`${colorKey}-${shade}`] = `text-${colorKey}-${shade}`;
      });
    } else {
      acc[colorKey] = `text-${colorKey}`;
    }
    return acc;
  },
  {}
);

const textStyles = cva(["w-full "], {
  variants: {
    color: colorVariants,
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      h6: "text-h6",
      h5: "text-h5",
      h4: "text-h4",
      h3: "text-h3",
      h2: "text-h2",
      h1: "text-h1",
    },
    weight: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
    defaultVariants: {
      align: "left",
      size: "md",
    },
  },
});

export type TextProps<T extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    T,
    VariantProps<typeof textStyles> & {
      color?: string; // Optional color prop
    }
  >;

type TextComponent = <T extends React.ElementType = "span">(
  props: TextProps<T>
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(
  <T extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      color, // Added color prop
      className,
      ...props
    }: TextProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as || "span";
    console.log(
      "cn",
      textStyles({
        className,
        align,
        size,
        emphasis,
        italic,
        underline,
        weight,
        color,
      })
    );
    return (
      <Component
        ref={ref}
        className={textStyles({
          className,
          align,
          size,
          emphasis,
          italic,
          underline,
          weight,
          color,
        })}
        {...props}
      />
    );
  }
) as TextComponent;
