import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the avatar',
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'busy', 'away'],
      description: 'The status indicator of the avatar',
    },
    src: {
      control: 'text',
      description: 'The URL of the avatar image',
    },
    alt: {
      control: 'text',
      description: 'The alt text for the avatar image',
    },
    initials: {
      control: 'text',
      description: 'The initials to display when the image fails to load',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'John Doe',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const WithStatus: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/17.jpg',
    alt: 'Jane Smith',
    status: 'online',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'invalid-image-url.jpg', // This will fail
    alt: 'Jane Smith',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-4">
      <Avatar size="xs" src="https://randomuser.me/api/portraits/men/33.jpg" alt="Extra Small" />
      <Avatar size="sm" src="https://randomuser.me/api/portraits/men/34.jpg" alt="Small" />
      <Avatar size="md" src="https://randomuser.me/api/portraits/men/35.jpg" alt="Medium" />
      <Avatar size="lg" src="https://randomuser.me/api/portraits/men/36.jpg" alt="Large" />
      <Avatar size="xl" src="https://randomuser.me/api/portraits/men/37.jpg" alt="Extra Large" />
      <Avatar
        size="2xl"
        src="https://randomuser.me/api/portraits/men/38.jpg"
        alt="Double Extra Large"
      />
    </div>
  ),
};

export const Statuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" alt="Online" status="online" />
      <Avatar
        src="https://randomuser.me/api/portraits/women/22.jpg"
        alt="Offline"
        status="offline"
      />
      <Avatar src="https://randomuser.me/api/portraits/women/23.jpg" alt="Busy" status="busy" />
      <Avatar src="https://randomuser.me/api/portraits/women/24.jpg" alt="Away" status="away" />
    </div>
  ),
};

export const InitialFallbacks: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar alt="John Doe" />
      <Avatar alt="Alice Johnson" />
      <Avatar alt="Bob Smith" />
      <Avatar alt="Carla Williams" />
    </div>
  ),
};

export const AvatarGroups: Story = {
  render: () => (
    <div className="space-y-4">
      <AvatarGroup>
        <Avatar src="https://randomuser.me/api/portraits/men/41.jpg" alt="User 1" />
        <Avatar src="https://randomuser.me/api/portraits/women/41.jpg" alt="User 2" />
        <Avatar src="https://randomuser.me/api/portraits/men/42.jpg" alt="User 3" />
        <Avatar src="https://randomuser.me/api/portraits/women/42.jpg" alt="User 4" />
      </AvatarGroup>

      <AvatarGroup max={3}>
        <Avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="User 5" />
        <Avatar src="https://randomuser.me/api/portraits/women/43.jpg" alt="User 6" />
        <Avatar src="https://randomuser.me/api/portraits/men/44.jpg" alt="User 7" />
        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 8" />
        <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" alt="User 9" />
      </AvatarGroup>

      <AvatarGroup size="lg">
        <Avatar src="https://randomuser.me/api/portraits/men/46.jpg" alt="User 10" />
        <Avatar src="https://randomuser.me/api/portraits/women/46.jpg" alt="User 11" />
        <Avatar src="https://randomuser.me/api/portraits/men/47.jpg" alt="User 12" />
      </AvatarGroup>
    </div>
  ),
};
