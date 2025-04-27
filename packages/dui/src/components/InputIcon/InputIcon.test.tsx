import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputIcon } from './InputIcon';

describe('InputIcon', () => {
  it('renders correctly', () => {
    render(<InputIcon data-testid="test-icon">🔍</InputIcon>);
    expect(screen.getByTestId('test-icon')).toBeDefined();
    expect(screen.getByText('🔍')).toBeDefined();
  });

  it('applies the correct data-slot attribute', () => {
    const { container } = render(<InputIcon>🔍</InputIcon>);
    expect(container.firstChild).toHaveAttribute('data-slot', 'icon');
  });

  it('applies position class correctly', () => {
    const { container, rerender } = render(<InputIcon position="left">🔍</InputIcon>);
    expect(container.firstChild).toHaveClass('left-3');

    rerender(<InputIcon position="right">🔍</InputIcon>);
    expect(container.firstChild).toHaveClass('right-3');
  });

  it('allows for custom className to be passed', () => {
    const { container } = render(<InputIcon className="test-class">🔍</InputIcon>);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('forwards other props correctly', () => {
    render(
      <InputIcon aria-label="search icon" data-testid="icon">
        🔍
      </InputIcon>,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('aria-label', 'search icon');
  });
});
