import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeDefined();
  });

  it('applies the correct class for required fields', () => {
    const { container } = render(<Label required>Required Field</Label>);
    // Look for a className that indicates the "required" variant (with asterisk)
    expect(container.firstChild).toHaveClass('after:content-["*"]');
  });

  it('applies the correct class for disabled state', () => {
    const { container } = render(<Label disabled>Disabled Label</Label>);
    // Look for a className that indicates disabled styling
    expect(container.firstChild).toHaveClass('text-muted-foreground');
    expect(container.firstChild).toHaveClass('cursor-not-allowed');
  });

  it('allows for custom className to be passed', () => {
    const { container } = render(<Label className="custom-class">Custom Class Label</Label>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('associates with form control correctly via htmlFor', () => {
    render(
      <>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" data-testid="input" />
      </>,
    );

    const label = screen.getByText('Test Label');
    const input = screen.getByTestId('input');

    expect(label).toHaveAttribute('for', 'test-input');
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('applies size variants correctly', () => {
    const { container } = render(<Label size="lg">Large Label</Label>);
    expect(container.firstChild).toHaveClass('text-base');
  });

  it('applies weight variants correctly', () => {
    const { container } = render(<Label weight="bold">Bold Label</Label>);
    expect(container.firstChild).toHaveClass('font-bold');
  });
});
