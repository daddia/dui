import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test Input" />);
    expect(screen.getByPlaceholderText('Test Input')).toBeDefined();
  });

  it('applies the correct class for size variants', () => {
    const { rerender, container } = render(<Input size="sm" />);
    expect(container.querySelector('input')).toHaveClass('h-8');

    rerender(<Input size="md" />);
    expect(container.querySelector('input')).toHaveClass('h-10');

    rerender(<Input size="lg" />);
    expect(container.querySelector('input')).toHaveClass('h-12');
  });

  it('applies error styling when error is provided', () => {
    const { container } = render(<Input error="This field is required" />);
    expect(container.querySelector('input')).toHaveClass('border-destructive');
    expect(screen.getByText('This field is required')).toBeDefined();
    expect(screen.getByText('This field is required')).toHaveClass('text-destructive');
  });

  it('applies success styling when success is provided', () => {
    const { container } = render(<Input success="Looks good!" />);
    expect(container.querySelector('input')).toHaveClass('border-green-500');
    expect(screen.getByText('Looks good!')).toBeDefined();
    expect(screen.getByText('Looks good!')).toHaveClass('text-green-500');
  });

  it('displays helper text when provided', () => {
    render(<Input helperText="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeDefined();
    expect(screen.getByText('Enter your email')).toHaveClass('text-muted-foreground');
  });

  it('renders with left icon', () => {
    const { container } = render(<Input leftIcon={<span data-testid="left-icon">L</span>} />);
    expect(screen.getByTestId('left-icon')).toBeDefined();
    expect(container.querySelector('input')).toHaveClass('pl-10');
  });

  it('renders with right icon', () => {
    const { container } = render(<Input rightIcon={<span data-testid="right-icon">R</span>} />);
    expect(screen.getByTestId('right-icon')).toBeDefined();
    expect(container.querySelector('input')).toHaveClass('pr-10');
  });

  it('applies disabled styling when disabled', () => {
    const { container } = render(<Input disabled />);
    expect(container.querySelector('input')).toHaveAttribute('disabled');
    expect(container.querySelector('input')).toHaveClass('disabled:opacity-50');
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'Hello World');

    expect(input).toHaveValue('Hello World');
  });

  it('applies custom wrapper className', () => {
    const { container } = render(<Input wrapperClassName="test-wrapper" />);
    expect(container.firstChild).toHaveClass('test-wrapper');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<Input error="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});
