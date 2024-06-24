import type { Meta, StoryObj } from "@storybook/react";

import AddProjectModal from "./AddProjectModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const meta = {
  component: AddProjectModal,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof AddProjectModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setShowModal: () => console.log("change"),
  },
};
