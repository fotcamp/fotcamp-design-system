import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta = {
  title: "Checkbox",
  component: Checkbox.Root,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <Checkbox.Root defaultChecked={false}>
      <span>✓</span>
    </Checkbox.Root>
  )
};

export const Checked: Story = {
  render: args => (
    <Checkbox.Root defaultChecked>
      <span>✓</span>
    </Checkbox.Root>
  )
};

export const Disabled: Story = {
  render: args => (
    <Checkbox.Root defaultChecked disabled>
      <span>✓</span>
    </Checkbox.Root>
  )
};

export const Required: Story = {
  render: args => (
    <Checkbox.Root defaultChecked required>
      <span>✓</span>
    </Checkbox.Root>
  )
};
