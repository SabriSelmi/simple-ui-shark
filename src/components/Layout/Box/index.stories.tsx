import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: (args) => (
    <Box {...args} className="w-[100px] h-[100px] bg-blue-500" />
  ),
};
