import type { Meta, StoryObj } from '@storybook/react';
import { InputIcon } from './InputIcon';

const meta: Meta<typeof InputIcon> = {
  title: 'Components/InputIcon',
  component: InputIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputIcon>;

export const Default: Story = {
  render: () => (
    <div className="border-input relative h-10 w-full rounded-md border">
      <InputIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </InputIcon>
      <input className="h-full w-full rounded-md px-3 pl-10" placeholder="Search..." />
    </div>
  ),
};

export const RightPosition: Story = {
  render: () => (
    <div className="border-input relative h-10 w-full rounded-md border">
      <input className="h-full w-full rounded-md px-3 pr-10" placeholder="Enter email..." />
      <InputIcon position="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.68.402 3.334 1.137 4.822.134.271-.036.645-.343.75-2.071.704-4.368.704-6.39 0a.478.478 0 0 1-.343-.75c.747-1.488 1.149-3.143 1.149-4.822 0-1.68-.402-3.334-1.137-4.822a.478.478 0 0 1 .343-.75c2.071-.704 4.368-.704 6.39 0 .307.105.477.479.343.75-.747 1.488-1.149 3.143-1.149 4.822Z" />
        </svg>
      </InputIcon>
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <div className="border-input relative h-10 w-full rounded-md border">
      <InputIcon className="text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L8.029 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
        </svg>
      </InputIcon>
      <input className="h-full w-full rounded-md px-3 pl-10" placeholder="Start typing..." />
    </div>
  ),
};
