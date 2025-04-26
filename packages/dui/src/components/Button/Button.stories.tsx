import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'solid', 'plain'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'blue',
        'red',
        'green',
        'yellow',
        'purple',
        'pink',
        'indigo',
        'orange',
        'cyan',
        'emerald',
        'teal',
        'violet',
        'fuchsia',
        'rose',
        'amber',
        'lime',
        'sky',
        'zinc',
      ],
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    plain: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Button',
  },
};

export const Plain: Story = {
  args: {
    plain: true,
    children: 'Plain Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AsLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'Link Button',
    target: '_blank',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button color="blue" variant="solid">
        Blue
      </Button>
      <Button color="red" variant="solid">
        Red
      </Button>
      <Button color="green" variant="solid">
        Green
      </Button>
      <Button color="yellow" variant="solid">
        Yellow
      </Button>
      <Button color="purple" variant="solid">
        Purple
      </Button>
      <Button color="pink" variant="solid">
        Pink
      </Button>
      <Button color="indigo" variant="solid">
        Indigo
      </Button>
      <Button color="orange" variant="solid">
        Orange
      </Button>
      <Button color="cyan" variant="solid">
        Cyan
      </Button>
      <Button color="emerald" variant="solid">
        Emerald
      </Button>
      <Button color="teal" variant="solid">
        Teal
      </Button>
      <Button color="violet" variant="solid">
        Violet
      </Button>
      <Button color="fuchsia" variant="solid">
        Fuchsia
      </Button>
      <Button color="rose" variant="solid">
        Rose
      </Button>
      <Button color="amber" variant="solid">
        Amber
      </Button>
      <Button color="lime" variant="solid">
        Lime
      </Button>
      <Button color="sky" variant="solid">
        Sky
      </Button>
      <Button color="zinc" variant="solid">
        Zinc
      </Button>
    </div>
  ),
};
