import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Display/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description: 'The aspect ratio of the container',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    ),
    className: 'w-full max-w-md',
  },
};

export const Landscape: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    ),
    className: 'w-full max-w-md',
  },
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
    children: (
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    ),
    className: 'w-full max-w-md',
  },
};
