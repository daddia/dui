import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta = {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="h-20 w-96 rounded-md border" orientation="horizontal">
      <div className="flex h-full items-center">
        <div className="flex gap-4 whitespace-nowrap px-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="bg-muted flex h-12 w-12 items-center justify-center rounded-md">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border" orientation="vertical">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-72 w-64 rounded-md border">
      <div className="p-4" style={{ width: '400px' }}>
        <h4 className="mb-4 text-sm font-medium leading-none">Tags and Content</h4>
        <p className="mb-4">
          This content is wider than the container and will require both vertical and horizontal
          scrolling.
        </p>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag} - This is a long line of text to force horizontal scrolling as well. The
            horizontal scrollbar should appear.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithMaxHeight: Story = {
  render: () => (
    <ScrollArea maxHeight="150px" className="w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.slice(0, 15).map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const AlwaysVisible: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border" alwaysVisible>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const ScrollbarSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2 text-sm">Small Scrollbar</h4>
        <ScrollArea className="h-40 w-48 rounded-md border" scrollbarSize="sm" alwaysVisible>
          <div className="p-4">
            {tags.slice(0, 20).map((tag) => (
              <div key={tag} className="text-sm">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 className="mb-2 text-sm">Medium Scrollbar (Default)</h4>
        <ScrollArea className="h-40 w-48 rounded-md border" scrollbarSize="md" alwaysVisible>
          <div className="p-4">
            {tags.slice(0, 20).map((tag) => (
              <div key={tag} className="text-sm">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 className="mb-2 text-sm">Large Scrollbar</h4>
        <ScrollArea className="h-40 w-48 rounded-md border" scrollbarSize="lg" alwaysVisible>
          <div className="p-4">
            {tags.slice(0, 20).map((tag) => (
              <div key={tag} className="text-sm">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};

export const NonRoundedThumb: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border" rounded={false} alwaysVisible>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border" disabled>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags (Scrolling Disabled)</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
