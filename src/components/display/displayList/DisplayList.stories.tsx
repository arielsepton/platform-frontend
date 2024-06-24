import type { Meta, StoryObj } from "@storybook/react";

import DisplayList from "./DisplayList";

const meta = {
  component: DisplayList,
} satisfies Meta<typeof DisplayList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>hi</div>,
  },
};
