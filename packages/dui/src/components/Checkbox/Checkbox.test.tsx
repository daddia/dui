import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox, CheckboxField } from './Checkbox';

describe('Checkbox', () => {
  test('renders properly with label', () => {
    render(<Checkbox label="Test Checkbox" />);

    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('handles checked state properly', () => {
    const onCheckedChange = jest.fn();

    render(<Checkbox label="Test Checkbox" onCheckedChange={onCheckedChange} />);

    const checkbox = screen.getByRole('checkbox');

    // Initial state should be unchecked
    expect(checkbox).not.toBeChecked();

    // Click to check
    fireEvent.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  test('respects disabled state', () => {
    render(<Checkbox label="Disabled Checkbox" disabled />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('shows required indicator when required', () => {
    render(<Checkbox label="Required Checkbox" required />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('applies different sizes correctly', () => {
    const { rerender } = render(<Checkbox label="Small Checkbox" size="sm" />);

    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('size-4');

    rerender(<Checkbox label="Medium Checkbox" size="md" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('size-5');

    rerender(<Checkbox label="Large Checkbox" size="lg" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('size-6');
  });

  test('respects fullWidth prop', () => {
    render(<Checkbox label="Full Width Checkbox" fullWidth />);

    const wrapper = screen.getByRole('checkbox').parentElement;
    expect(wrapper).toHaveClass('w-full');
  });

  test('works with indeterminate state', () => {
    render(<Checkbox label="Indeterminate Checkbox" checked="indeterminate" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  test('applies different color variants', () => {
    const { rerender } = render(<Checkbox label="Default Checkbox" checked color="default" />);

    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('data-[state=checked]:bg-blue-600');

    rerender(<Checkbox label="Red Checkbox" checked color="red" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('data-[state=checked]:bg-red-600');

    rerender(<Checkbox label="Green Checkbox" checked color="green" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('data-[state=checked]:bg-green-600');
  });
});

describe('CheckboxGroup', () => {
  test('renders a group of checkboxes', () => {
    render(
      <CheckboxGroup>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>,
    );

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
    expect(screen.getByRole('group')).toBeInTheDocument();
  });
});

describe('CheckboxField', () => {
  test('renders with label and control', () => {
    render(<CheckboxField control={<Checkbox />} label="Test Label" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders with description when provided', () => {
    render(
      <CheckboxField control={<Checkbox />} label="Test Label" description="Test Description" />,
    );

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
