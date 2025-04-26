import { render, screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  test('renders children correctly', () => {
    render(<Paragraph>Test content</Paragraph>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('applies size classes correctly', () => {
    const { rerender } = render(<Paragraph size="xs">Extra Small</Paragraph>);
    expect(screen.getByText('Extra Small')).toHaveClass('text-xs/6');

    rerender(<Paragraph size="sm">Small</Paragraph>);
    expect(screen.getByText('Small')).toHaveClass('text-sm/6');

    rerender(<Paragraph size="base">Base</Paragraph>);
    expect(screen.getByText('Base')).toHaveClass('text-base/6');

    rerender(<Paragraph size="lg">Large</Paragraph>);
    expect(screen.getByText('Large')).toHaveClass('text-lg/7');
  });

  test('applies weight classes correctly', () => {
    const { rerender } = render(<Paragraph weight="normal">Normal</Paragraph>);
    expect(screen.getByText('Normal')).toHaveClass('font-normal');

    rerender(<Paragraph weight="medium">Medium</Paragraph>);
    expect(screen.getByText('Medium')).toHaveClass('font-medium');

    rerender(<Paragraph weight="semibold">Semibold</Paragraph>);
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold');

    rerender(<Paragraph weight="bold">Bold</Paragraph>);
    expect(screen.getByText('Bold')).toHaveClass('font-bold');
  });

  test('applies alignment classes correctly', () => {
    const { rerender } = render(<Paragraph align="left">Left</Paragraph>);
    expect(screen.getByText('Left')).toHaveClass('text-left');

    rerender(<Paragraph align="center">Center</Paragraph>);
    expect(screen.getByText('Center')).toHaveClass('text-center');

    rerender(<Paragraph align="right">Right</Paragraph>);
    expect(screen.getByText('Right')).toHaveClass('text-right');
  });

  test('applies truncate class when truncate is true', () => {
    render(<Paragraph truncate>Truncated text</Paragraph>);
    expect(screen.getByText('Truncated text')).toHaveClass('truncate');
  });

  test('applies custom className', () => {
    render(<Paragraph className="custom-class">Custom class</Paragraph>);
    expect(screen.getByText('Custom class')).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Paragraph ref={ref}>Ref test</Paragraph>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });
});
