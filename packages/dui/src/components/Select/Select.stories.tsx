import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Select an option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group label="Citrus">
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="lime">Lime</Select.Item>
          <Select.Item value="lemon">Lemon</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group label="Berries">
          <Select.Item value="strawberry">Strawberry</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="raspberry">Raspberry</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group label="Tropical">
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
          <Select.Item value="mango">Mango</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2 text-sm">Small</h4>
        <Select size="sm">
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 text-sm">Medium (Default)</h4>
        <Select size="md">
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 text-sm">Large</h4>
        <Select size="lg">
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2 text-sm">Default</h4>
        <Select variant="default">
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 text-sm">Outline</h4>
        <Select variant="outline">
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select>
      </div>

      <div>
        <h4 className="mb-2 text-sm">Ghost</h4>
        <Select variant="ghost">
          <Select.Trigger>
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <Select.Trigger>
        <Select.Value placeholder="Select is disabled" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Some items disabled" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana" disabled>
          Banana (Disabled)
        </Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="grape" disabled>
          Grape (Disabled)
        </Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select>
  ),
};
