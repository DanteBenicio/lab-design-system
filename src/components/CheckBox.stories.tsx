import { Meta, StoryObj } from "@storybook/react"
import Checkbox, { CheckboxProps } from "./CheckBox"
import Text from "./Text"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: { },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center">
        {Story()}
        <Text size="sm">Lembrar-me de mim por 30 dias</Text>
      </div>
    )
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
