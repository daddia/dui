import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputGroup } from './InputGroup';

describe('InputGroup', () => {
  it('renders correctly', () => {
    render(
      <InputGroup data-testid="input-group">
        <input placeholder="Test input" />
      </InputGroup>,
    );
    expect(screen.getByTestId('input-group')).toBeDefined();
    expect(screen.getByPlaceholderText('Test input')).toBeDefined();
  });

  it('applies the correct classes', () => {
    const { container } = render(
      <InputGroup>
        <input />
      </InputGroup>,
    );
    expect(container.firstChild).toHaveClass('relative');
    expect(container.firstChild).toHaveClass('isolate');
    expect(container.firstChild).toHaveClass('block');
  });

  it('works with data-slot icon elements', () => {
    render(
      <InputGroup>
        <span data-slot="icon" data-testid="icon">
          🔍
        </span>
        <input placeholder="Search" />
      </InputGroup>,
    );

    expect(screen.getByTestId('icon')).toBeDefined();
  });

  it('allows for custom className to be passed', () => {
    const { container } = render(
      <InputGroup className="test-class">
        <input />
      </InputGroup>,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders with asChild when specified', () => {
    render(
      <InputGroup asChild>
        <div data-testid="custom-element">
          <input />
        </div>
      </InputGroup>,
    );

    expect(screen.getByTestId('custom-element')).toBeDefined();
  });
});
