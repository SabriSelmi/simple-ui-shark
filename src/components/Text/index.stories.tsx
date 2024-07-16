import { theme } from "@/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const colorOptions = Object.keys(theme.colors).reduce(
  (acc: Record<string, string>, key: string) => {
    const colorGroup = theme.colors[key as keyof typeof theme.colors];
    if (typeof colorGroup === "object") {
      Object.keys(colorGroup).forEach((shade) => {
        acc[`${key}-${shade}`] = `${key}-${shade}`;
      });
    } else {
      acc[key] = key;
    }
    return acc;
  },
  {}
);

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/0t0pK5luEdxTorOcg92K49/My-Travel-App?node-id=6-25263&t=TDPuN2n0B75baEMy-4",
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "xl",
        "lg",
        "md",
        "sm",
        "xs",
      ], // Add all sizes that you want to be selectable
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: colorOptions as unknown as string[],
    },
    as: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },

  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    children: "Display h1",
    size: "h1",
    as: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Display h2",
    size: "h2",
    as: "h2",
    weight: "regular",
    color: "gray-600",
  },
};

export const Heading3: Story = {
  args: {
    children: "Display h3",
    size: "h3",
    as: "h3",
    weight: "regular",
    color: "gray-600",
  },
};

export const Heading4: Story = {
  args: {
    children: "Display h4",
    size: "h4",
    as: "h4",
    weight: "regular",
    color: "gray-600",
  },
};

export const Heading5: Story = {
  args: {
    children: "Display h5",
    size: "h5",
    as: "h5",
    weight: "regular",
    color: "gray-600",
  },
};

export const Heading6: Story = {
  args: {
    children: "Display h6",
    size: "h6",
    as: "h6",
    weight: "regular",
    color: "gray-600",
  },
};

export const TextXL: Story = {
  args: {
    children: "Text xl",
    size: "xl",
    as: "span",
    weight: "regular",
    color: "gray-600",
  },
};

export const TextLG: Story = {
  args: {
    children: "Text lg",
    size: "lg",
    as: "span",
    weight: "regular",
    color: "gray-600",
  },
};

export const TextMD: Story = {
  args: {
    children: "Text md",
    size: "md",
    as: "span",
    weight: "regular",
    color: "gray-600",
  },
};

export const TextSM: Story = {
  args: {
    children: "Text sm",
    size: "sm",
    as: "span",
    weight: "regular",
    color: "gray-600",
  },
};

export const TextXS: Story = {
  args: {
    children: "Text xs",
    size: "xs",
    as: "span",
    weight: "regular",
    color: "gray-600",
  },
};
