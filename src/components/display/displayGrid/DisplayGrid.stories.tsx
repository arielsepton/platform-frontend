import type { Meta, StoryObj } from "@storybook/react";

import DisplayGrid from "./DisplayGrid";

const meta = {
  component: DisplayGrid,
} satisfies Meta<typeof DisplayGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

// const projects = [{ name: "name", hierarchy: "hierarchy" }];
export const Default: Story = {
  args: {
    children: <div></div>,
  },
};
