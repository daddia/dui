import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be opened at once',
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Whether an open item can be closed',
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the item(s) to be opened by default',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const SingleItem: Story = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-full max-w-md',
    items: [
      {
        value: 'item-1',
        header: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-full max-w-md',
    items: [
      {
        value: 'item-1',
        header: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        value: 'item-2',
        header: 'Is it styled?',
        content: 'Yes. It comes with default styles that match the other components theme.',
      },
      {
        value: 'item-3',
        header: 'Is it animated?',
        content: 'Yes. It is animated by default, but you can disable it if you prefer.',
      },
    ],
  },
};

export const MultipleType: Story = {
  args: {
    type: 'multiple',
    className: 'w-full max-w-md',
    defaultValue: ['item-1', 'item-3'],
    items: [
      {
        value: 'item-1',
        header: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        value: 'item-2',
        header: 'Is it styled?',
        content: 'Yes. It comes with default styles that match the other components theme.',
      },
      {
        value: 'item-3',
        header: 'Is it animated?',
        content: 'Yes. It is animated by default, but you can disable it if you prefer.',
      },
    ],
  },
};

export const WithoutIcon: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger icon={false}>Without icon</AccordionTrigger>
        <AccordionContent>
          This trigger doesn't have an icon, but you can add your own.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>With icon (default)</AccordionTrigger>
        <AccordionContent>This trigger has the default icon.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Enabled item</AccordionTrigger>
        <AccordionContent>This item can be opened and closed.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled item</AccordionTrigger>
        <AccordionContent>
          This content won't be visible because the item is disabled.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
