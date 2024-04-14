import type { StoryObj, Meta } from "@storybook/html"
import { fn } from "@storybook/test"
import type { TButtonProps } from "./Button"
import { createButton } from "./Button"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton(args)
  },
  argTypes: {
    accentColor: { control: "color" },
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["text", "filled", "tonal", "outlined"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<TButtonProps>

export default meta
type Story = StoryObj<TButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    accentColor: "#642020",
    variant: "text",
  },
}
export const Filled: Story = {
  args: {
    accentColor: "#642020",
    variant: "filled",
  },
}
export const Tonal: Story = {
  args: {
    accentColor: "#642020",
    variant: "tonal",
  },
}
export const Outlined: Story = {
  args: {
    accentColor: "#642020",
    variant: "outlined",
  },
}

export const ButtonIcon: Story = {
  args: {},
}
