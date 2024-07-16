import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "write your text here",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "write your number here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "write your password here",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "write your email here",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "write your search here",
  },
};

export const Url: Story = {
  args: {
    type: "url",
    placeholder: "write your url here",
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "write your tel here",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "write your date here",
  },
};

export const Time: Story = {
  args: {
    type: "time",
    placeholder: "write your time here",
  },
};

export const DateTime: Story = {
  args: {
    type: "datetime-local",
    placeholder: "write your datetime here",
  },
};

export const Range: Story = {
  args: {
    type: "range",
    placeholder: "write your range here",
  },
};

export const Color: Story = {
  args: {
    type: "color",
    placeholder: "write your color here",
  },
};
