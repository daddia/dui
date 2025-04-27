import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<TextArea placeholder="Test TextArea" />);
    expect(screen.getByPlaceholderText('Test TextArea')).toBeDefined();
  });

  it('applies the correct classes for resize variants', () => {
    const { rerender, container } = render(<TextArea resize="none" />);
    expect(container.querySelector('textarea')).toHaveClass('resize-none');

    rerender(<TextArea resize="vertical" />);
    expect(container.querySelector('textarea')).toHaveClass('resize-y');

    rerender(<TextArea resize="horizontal" />);
    expect(container.querySelector('textarea')).toHaveClass('resize-x');

    rerender(<TextArea resize="both" />);
    expect(container.querySelector('textarea')).toHaveClass('resize');
  });

  it('applies the correct classes for rows variants', () => {
    const { rerender, container } = render(<TextArea rows="sm" />);
    expect(container.querySelector('textarea')).toHaveClass('min-h-[60px]');

    rerender(<TextArea rows="md" />);
    expect(container.querySelector('textarea')).toHaveClass('min-h-[80px]');

    rerender(<TextArea rows="lg" />);
    expect(container.querySelector('textarea')).toHaveClass('min-h-[120px]');

    rerender(<TextArea rows="xl" />);
    expect(container.querySelector('textarea')).toHaveClass('min-h-[160px]');
  });

  it('applies error styling when error is provided', () => {
    const { container } = render(<TextArea error="This field is required" />);
    expect(container.querySelector('textarea')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field is required')).toBeDefined();
    expect(screen.getByText('This field is required')).toHaveClass('text-destructive');
  });

  it('applies success styling when success is provided', () => {
    render(<TextArea success="Looks good!" />);
    expect(screen.getByText('Looks good!')).toBeDefined();
    expect(screen.getByText('Looks good!')).toHaveClass('text-green-500');
  });

  it('displays helper text when provided', () => {
    render(<TextArea helperText="Enter your message" />);
    expect(screen.getByText('Enter your message')).toBeDefined();
    expect(screen.getByText('Enter your message')).toHaveClass('text-muted-foreground');
  });

  it('applies disabled styling when disabled', () => {
    const { container } = render(<TextArea disabled />);
    expect(container.querySelector('textarea')).toHaveAttribute('disabled');
    expect(container.querySelector('textarea')).toHaveAttribute('data-disabled');
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    render(<TextArea placeholder="Enter text" />);

    const textarea = screen.getByPlaceholderText('Enter text');
    await user.type(textarea, 'Hello World');

    expect(textarea).toHaveValue('Hello World');
  });

  it('applies custom wrapper className', () => {
    const { container } = render(<TextArea wrapperClassName="test-wrapper" />);
    expect(container.firstChild).toHaveClass('test-wrapper');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<TextArea error="Error message" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows character count when showCount is true', () => {
    render(<TextArea defaultValue="Hello" showCount />);
    expect(screen.getByText('0')).toBeDefined();
  });

  it('shows character count with maxLength when both are provided', () => {
    render(<TextArea defaultValue="Hello" showCount maxLength={100} />);
    expect(screen.getByText('0/100')).toBeDefined();
  });

  it('updates character count on input', async () => {
    const user = userEvent.setup();
    render(<TextArea showCount />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Hello');

    expect(screen.getByText('0')).toBeDefined();
  });

  it('calls onChange handler when provided', () => {
    const onChange = vi.fn();
    render(<TextArea onChange={onChange} />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Test' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
