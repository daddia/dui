import React from 'react';
import { render, screen } from '@testing-library/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from '../Checkbox';

describe('CheckboxGroup', () => {
  test('renders properly with children', () => {
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

  test('applies vertical class when vertical is true', () => {
    render(
      <CheckboxGroup vertical>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
      </CheckboxGroup>,
    );

    const group = screen.getByRole('group');
    expect(group).toHaveClass('flex');
    expect(group).toHaveClass('flex-col');
  });

  test('applies horizontal class when vertical is false', () => {
    render(
      <CheckboxGroup vertical={false}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
      </CheckboxGroup>,
    );

    const group = screen.getByRole('group');
    expect(group).toHaveClass('flex');
    expect(group).toHaveClass('flex-row');
  });

  test('applies different size classes', () => {
    const { rerender } = render(
      <CheckboxGroup size="sm" vertical={false}>
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );

    let group = screen.getByRole('group');
    expect(group).toHaveClass('gap-4');

    rerender(
      <CheckboxGroup size="lg" vertical={false}>
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );

    group = screen.getByRole('group');
    expect(group).toHaveClass('gap-8');
  });

  test('respects fullWidth prop', () => {
    render(
      <CheckboxGroup fullWidth>
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );

    const parentDiv = screen.getByRole('group').parentElement;
    expect(parentDiv).toHaveClass('w-full');
  });

  test('shows label when provided', () => {
    render(
      <CheckboxGroup label="Test Group">
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );

    expect(screen.getByText('Test Group')).toBeInTheDocument();
  });

  test('shows required indicator when required', () => {
    render(
      <CheckboxGroup label="Test Group" required>
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('passes name prop to children', () => {
    render(
      <CheckboxGroup name="test-group">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
      </CheckboxGroup>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((checkbox) => {
      expect(checkbox).toHaveAttribute('name', 'test-group');
    });
  });
});
