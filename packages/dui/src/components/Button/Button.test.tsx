import * as React from 'react';
import {describe, test, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from './Button';

describe('Button', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', {name: /click me/i})).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    const {rerender} = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-100');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-gray-300');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-red-600');

    rerender(<Button variant="solid">Solid</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-transparent');

    rerender(<Button plain>Plain</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });

  test('applies size classes correctly', () => {
    const {rerender} = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  test('applies color classes correctly', () => {
    const {rerender} = render(
      <Button color="blue" variant="solid">
        Blue
      </Button>,
    );
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600');

    rerender(
      <Button color="red" variant="solid">
        Red
      </Button>,
    );
    expect(screen.getByRole('button')).toHaveClass('bg-red-600');

    rerender(
      <Button color="green" variant="solid">
        Green
      </Button>,
    );
    expect(screen.getByRole('button')).toHaveClass('bg-green-600');
  });

  test('renders loading state correctly', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByRole('button').querySelector('.animate-spin')).toBeInTheDocument();
  });

  test('renders disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('renders with full width correctly', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  test('renders with left icon correctly', () => {
    render(<Button leftIcon={<span data-testid="left-icon">←</span>}>With Icon</Button>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  test('renders with right icon correctly', () => {
    render(<Button rightIcon={<span data-testid="right-icon">→</span>}>With Icon</Button>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders as a link when href is provided', () => {
    render(<Button href="https://example.com">Link Button</Button>);
    const linkElement = screen.getByRole('link', {name: /link button/i});
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  test('link button can be disabled', () => {
    render(
      <Button href="https://example.com" disabled>
        Disabled Link
      </Button>,
    );
    const linkElement = screen.getByRole('link', {name: /disabled link/i});
    expect(linkElement).toHaveClass('pointer-events-none');
    expect(linkElement).toHaveClass('opacity-50');
  });

  test('renders TouchTarget for improved touch accessibility', () => {
    render(<Button>With Touch Target</Button>);
    expect(screen.getByRole('button').querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });
});
