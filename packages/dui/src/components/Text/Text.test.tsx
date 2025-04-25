import {render, screen} from '@testing-library/react';
import {Text} from './Text';

describe('Text', () => {
  test('renders children correctly', () => {
    render(<Text>Test content</Text>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with correct element when as prop is provided', () => {
    const {rerender} = render(<Text as="span">Span text</Text>);
    expect(screen.getByText('Span text').tagName).toBe('SPAN');

    rerender(<Text as="div">Div text</Text>);
    expect(screen.getByText('Div text').tagName).toBe('DIV');

    rerender(<Text as="h1">Heading text</Text>);
    expect(screen.getByText('Heading text').tagName).toBe('H1');
  });

  test('applies size classes correctly', () => {
    const {rerender} = render(<Text size="xs">Extra Small</Text>);
    expect(screen.getByText('Extra Small')).toHaveClass('text-xs/6');

    rerender(<Text size="sm">Small</Text>);
    expect(screen.getByText('Small')).toHaveClass('text-sm/6');

    rerender(<Text size="base">Base</Text>);
    expect(screen.getByText('Base')).toHaveClass('text-base/6');

    rerender(<Text size="lg">Large</Text>);
    expect(screen.getByText('Large')).toHaveClass('text-lg/7');
  });

  test('applies weight classes correctly', () => {
    const {rerender} = render(<Text weight="normal">Normal</Text>);
    expect(screen.getByText('Normal')).toHaveClass('font-normal');

    rerender(<Text weight="medium">Medium</Text>);
    expect(screen.getByText('Medium')).toHaveClass('font-medium');

    rerender(<Text weight="semibold">Semibold</Text>);
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold');

    rerender(<Text weight="bold">Bold</Text>);
    expect(screen.getByText('Bold')).toHaveClass('font-bold');
  });

  test('applies color classes correctly', () => {
    const {rerender} = render(<Text color="default">Default</Text>);
    expect(screen.getByText('Default')).toHaveClass('text-zinc-900');

    rerender(<Text color="muted">Muted</Text>);
    expect(screen.getByText('Muted')).toHaveClass('text-zinc-500');

    rerender(<Text color="primary">Primary</Text>);
    expect(screen.getByText('Primary')).toHaveClass('text-blue-600');

    rerender(<Text color="success">Success</Text>);
    expect(screen.getByText('Success')).toHaveClass('text-green-600');

    rerender(<Text color="warning">Warning</Text>);
    expect(screen.getByText('Warning')).toHaveClass('text-yellow-600');

    rerender(<Text color="danger">Danger</Text>);
    expect(screen.getByText('Danger')).toHaveClass('text-red-600');
  });

  test('applies alignment classes correctly', () => {
    const {rerender} = render(<Text align="left">Left</Text>);
    expect(screen.getByText('Left')).toHaveClass('text-left');

    rerender(<Text align="center">Center</Text>);
    expect(screen.getByText('Center')).toHaveClass('text-center');

    rerender(<Text align="right">Right</Text>);
    expect(screen.getByText('Right')).toHaveClass('text-right');
  });

  test('applies truncate class when truncate is true', () => {
    render(<Text truncate>Truncated text</Text>);
    expect(screen.getByText('Truncated text')).toHaveClass('truncate');
  });

  test('applies custom className', () => {
    render(<Text className="custom-class">Custom class</Text>);
    expect(screen.getByText('Custom class')).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Text ref={ref}>Ref test</Text>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });
});
