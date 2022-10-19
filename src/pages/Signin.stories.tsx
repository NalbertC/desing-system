import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/Signin",
  component: SignIn,
  args: {},
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default: StoryObj = {};
