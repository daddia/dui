import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('RadioGroup', () => {
  it('renders a radio group with items', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('selects the default value', () => {
    render(
      <RadioGroup defaultValue="option-2">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).not.toBeChecked();
    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });

  it('allows changing selection', async () => {
    const user = userEvent.setup();

    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();

    await user.click(screen.getByLabelText('Option 2'));

    expect(screen.getByLabelText('Option 1')).not.toBeChecked();
    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });

  it('renders with a group label and description', () => {
    render(
      <RadioGroup
        label="Contact Method"
        description="Choose your preferred contact method"
        defaultValue="email"
      >
        <RadioGroup.Item value="email" label="Email" />
        <RadioGroup.Item value="phone" label="Phone" />
      </RadioGroup>,
    );

    expect(screen.getByText('Contact Method')).toBeInTheDocument();
    expect(screen.getByText('Choose your preferred contact method')).toBeInTheDocument();
  });

  it('displays an error message when provided', () => {
    render(
      <RadioGroup error="This field is required" defaultValue="">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('disables all radio items when the group is disabled', () => {
    render(
      <RadioGroup disabled defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeDisabled();
    expect(screen.getByLabelText('Option 2')).toBeDisabled();
  });

  it('renders radio items with descriptions', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" description="Description for option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" description="Description for option 2" />
      </RadioGroup>,
    );

    expect(screen.getByText('Description for option 1')).toBeInTheDocument();
    expect(screen.getByText('Description for option 2')).toBeInTheDocument();
  });

  it('works as a controlled component', () => {
    const handleChange = vi.fn();

    const { rerender } = render(
      <RadioGroup value="option-1" onValueChange={handleChange}>
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeChecked();

    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('option-2');

    // Still on option-1 until parent updates the value
    expect(screen.getByLabelText('Option 1')).toBeChecked();

    // Update controlled value
    rerender(
      <RadioGroup value="option-2" onValueChange={handleChange}>
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });

  it('can have horizontal orientation', () => {
    render(
      <RadioGroup orientation="horizontal" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
      </RadioGroup>,
    );

    // Check if the RadioGroup has horizontal class
    const radioGroupElement = screen.getByRole('radiogroup');
    expect(radioGroupElement).toHaveClass('flex-row');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <RadioGroup size="sm" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
      </RadioGroup>,
    );

    let radioItem = screen.getByLabelText('Option 1');
    expect(radioItem).toHaveClass('h-3.5');

    rerender(
      <RadioGroup size="md" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
      </RadioGroup>,
    );

    radioItem = screen.getByLabelText('Option 1');
    expect(radioItem).toHaveClass('h-4');

    rerender(
      <RadioGroup size="lg" defaultValue="option-1">
        <RadioGroup.Item value="option-1" label="Option 1" />
      </RadioGroup>,
    );

    radioItem = screen.getByLabelText('Option 1');
    expect(radioItem).toHaveClass('h-5');
  });
});
