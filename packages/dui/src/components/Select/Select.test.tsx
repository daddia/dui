import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  it('renders correctly', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders with size prop', () => {
    render(
      <Select size="lg">
        <Select.Trigger data-testid="select-trigger">
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass('h-12');
  });

  it('renders with variant prop', () => {
    render(
      <Select variant="outline">
        <Select.Trigger data-testid="select-trigger">
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass('border');
  });

  it('renders with disabled prop', () => {
    render(
      <Select disabled>
        <Select.Trigger data-testid="select-trigger">
          <Select.Value placeholder="Select is disabled" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders with placeholder', () => {
    render(
      <Select placeholder="Custom placeholder">
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    expect(screen.getByText('Custom placeholder')).toBeInTheDocument();
  });

  it('renders with group and labels', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group label="Fruits">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>,
    );

    // Open the select to check group label
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByText('Fruits')).toBeInTheDocument();
  });

  it('renders with separator', () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group label="Group 1">
            <Select.Item value="apple">Apple</Select.Item>
          </Select.Group>
          <Select.Separator data-testid="separator" />
          <Select.Group label="Group 2">
            <Select.Item value="banana">Banana</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>,
    );

    // Open the select to check separator
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByTestId('separator')).toBeInTheDocument();
  });
});
