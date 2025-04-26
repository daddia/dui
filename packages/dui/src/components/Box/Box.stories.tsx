import type {Meta, StoryObj} from '@storybook/react';
import {Box} from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'base', 'lg', 'xl'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'base', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'base', 'lg', 'xl', 'full'],
    },
    border: {
      control: 'select',
      options: ['none', 'sm', 'base', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'danger'],
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main', 'aside', 'header', 'footer', 'nav'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'Default Box Content',
  },
};

export const Padding: Story = {
  render: () => (
    <div className="space-y-4">
      <Box padding="none">No Padding</Box>
      <Box padding="xs">Extra Small Padding</Box>
      <Box padding="sm">Small Padding</Box>
      <Box padding="base">Base Padding</Box>
      <Box padding="lg">Large Padding</Box>
      <Box padding="xl">Extra Large Padding</Box>
    </div>
  ),
};

export const Shadow: Story = {
  render: () => (
    <div className="space-y-4">
      <Box shadow="none">No Shadow</Box>
      <Box shadow="sm">Small Shadow</Box>
      <Box shadow="base">Base Shadow</Box>
      <Box shadow="lg">Large Shadow</Box>
      <Box shadow="xl">Extra Large Shadow</Box>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="space-y-4">
      <Box radius="none">No Radius</Box>
      <Box radius="sm">Small Radius</Box>
      <Box radius="base">Base Radius</Box>
      <Box radius="lg">Large Radius</Box>
      <Box radius="xl">Extra Large Radius</Box>
      <Box radius="full">Full Radius</Box>
    </div>
  ),
};

export const Border: Story = {
  render: () => (
    <div className="space-y-4">
      <Box border="none">No Border</Box>
      <Box border="sm">Small Border</Box>
      <Box border="base">Base Border</Box>
      <Box border="lg">Large Border</Box>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Box color="default">Default Color</Box>
      <Box color="muted">Muted Color</Box>
      <Box color="primary">Primary Color</Box>
      <Box color="success">Success Color</Box>
      <Box color="warning">Warning Color</Box>
      <Box color="danger">Danger Color</Box>
    </div>
  ),
};

export const AsElement: Story = {
  render: () => (
    <div className="space-y-4">
      <Box as="section">Section Box</Box>
      <Box as="article">Article Box</Box>
      <Box as="main">Main Box</Box>
      <Box as="aside">Aside Box</Box>
      <Box as="header">Header Box</Box>
      <Box as="footer">Footer Box</Box>
      <Box as="nav">Nav Box</Box>
    </div>
  ),
};
