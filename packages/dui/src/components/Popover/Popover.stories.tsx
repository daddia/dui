import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button';

const meta = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Popover with Arrow</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Edit Profile</Button>
      </Popover.Trigger>
      <Popover.Content className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width" className="text-sm font-medium">
                Width
              </label>
              <input
                id="width"
                type="number"
                className="border-input col-span-2 h-8 rounded-md border bg-transparent px-3 py-1 text-sm"
                placeholder="100%"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height" className="text-sm font-medium">
                Height
              </label>
              <input
                id="height"
                type="number"
                className="border-input col-span-2 h-8 rounded-md border bg-transparent px-3 py-1 text-sm"
                placeholder="300px"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Popover.Close asChild>
            <Button size="sm">Save changes</Button>
          </Popover.Close>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>With Close Button</Button>
      </Popover.Trigger>
      <Popover.Content showCloseButton>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover>
        <Popover.Trigger asChild>
          <Button>Small Size</Button>
        </Popover.Trigger>
        <Popover.Content size="sm">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Small Popover</h4>
            <p className="text-muted-foreground text-sm">Compact padding.</p>
          </div>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Medium Size</Button>
        </Popover.Trigger>
        <Popover.Content size="md">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Medium Popover</h4>
            <p className="text-muted-foreground text-sm">Default padding.</p>
          </div>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Large Size</Button>
        </Popover.Trigger>
        <Popover.Content size="lg">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Large Popover</h4>
            <p className="text-muted-foreground text-sm">Comfortable padding.</p>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover>
        <Popover.Trigger asChild>
          <Button>Start Aligned</Button>
        </Popover.Trigger>
        <Popover.Content align="start">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Start Alignment</h4>
            <p className="text-muted-foreground text-sm">Aligned to the start of the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Center Aligned</Button>
        </Popover.Trigger>
        <Popover.Content align="center">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Center Alignment</h4>
            <p className="text-muted-foreground text-sm">Aligned to the center of the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>End Aligned</Button>
        </Popover.Trigger>
        <Popover.Content align="end">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">End Alignment</h4>
            <p className="text-muted-foreground text-sm">Aligned to the end of the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Popover>
        <Popover.Trigger asChild>
          <Button>Top</Button>
        </Popover.Trigger>
        <Popover.Content side="top">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Top Position</h4>
            <p className="text-muted-foreground text-sm">Positioned above the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Right</Button>
        </Popover.Trigger>
        <Popover.Content side="right">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Right Position</h4>
            <p className="text-muted-foreground text-sm">Positioned to the right of the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Bottom</Button>
        </Popover.Trigger>
        <Popover.Content side="bottom">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Bottom Position</h4>
            <p className="text-muted-foreground text-sm">Positioned below the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Left</Button>
        </Popover.Trigger>
        <Popover.Content side="left">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Left Position</h4>
            <p className="text-muted-foreground text-sm">Positioned to the left of the trigger.</p>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover>
    </div>
  ),
};
