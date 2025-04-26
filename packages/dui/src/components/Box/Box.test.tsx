import { render, screen } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  test('renders children correctly', () => {
    render(<Box>Test content</Box>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('applies padding classes correctly', () => {
    const { rerender } = render(<Box padding="none">No padding</Box>);
    expect(screen.getByText('No padding')).toHaveClass('p-0');

    rerender(<Box padding="xs">Extra small padding</Box>);
    expect(screen.getByText('Extra small padding')).toHaveClass('p-2');

    rerender(<Box padding="sm">Small padding</Box>);
    expect(screen.getByText('Small padding')).toHaveClass('p-3');

    rerender(<Box padding="base">Base padding</Box>);
    expect(screen.getByText('Base padding')).toHaveClass('p-4');

    rerender(<Box padding="lg">Large padding</Box>);
    expect(screen.getByText('Large padding')).toHaveClass('p-6');

    rerender(<Box padding="xl">Extra large padding</Box>);
    expect(screen.getByText('Extra large padding')).toHaveClass('p-8');
  });

  test('applies shadow classes correctly', () => {
    const { rerender } = render(<Box shadow="none">No shadow</Box>);
    expect(screen.getByText('No shadow')).not.toHaveClass('shadow');

    rerender(<Box shadow="sm">Small shadow</Box>);
    expect(screen.getByText('Small shadow')).toHaveClass('shadow-sm');

    rerender(<Box shadow="base">Base shadow</Box>);
    expect(screen.getByText('Base shadow')).toHaveClass('shadow');

    rerender(<Box shadow="lg">Large shadow</Box>);
    expect(screen.getByText('Large shadow')).toHaveClass('shadow-lg');

    rerender(<Box shadow="xl">Extra large shadow</Box>);
    expect(screen.getByText('Extra large shadow')).toHaveClass('shadow-xl');
  });

  test('applies radius classes correctly', () => {
    const { rerender } = render(<Box radius="none">No radius</Box>);
    expect(screen.getByText('No radius')).toHaveClass('rounded-none');

    rerender(<Box radius="sm">Small radius</Box>);
    expect(screen.getByText('Small radius')).toHaveClass('rounded-sm');

    rerender(<Box radius="base">Base radius</Box>);
    expect(screen.getByText('Base radius')).toHaveClass('rounded-lg');

    rerender(<Box radius="lg">Large radius</Box>);
    expect(screen.getByText('Large radius')).toHaveClass('rounded-xl');

    rerender(<Box radius="xl">Extra large radius</Box>);
    expect(screen.getByText('Extra large radius')).toHaveClass('rounded-2xl');

    rerender(<Box radius="full">Full radius</Box>);
    expect(screen.getByText('Full radius')).toHaveClass('rounded-full');
  });

  test('applies border classes correctly', () => {
    const { rerender } = render(<Box border="none">No border</Box>);
    expect(screen.getByText('No border')).toHaveClass('border-0');

    rerender(<Box border="sm">Small border</Box>);
    expect(screen.getByText('Small border')).toHaveClass('border');

    rerender(<Box border="base">Base border</Box>);
    expect(screen.getByText('Base border')).toHaveClass('border-2');

    rerender(<Box border="lg">Large border</Box>);
    expect(screen.getByText('Large border')).toHaveClass('border-4');
  });

  test('applies color classes correctly', () => {
    const { rerender } = render(<Box color="default">Default color</Box>);
    expect(screen.getByText('Default color')).toHaveClass('bg-white');

    rerender(<Box color="muted">Muted color</Box>);
    expect(screen.getByText('Muted color')).toHaveClass('bg-zinc-50');

    rerender(<Box color="primary">Primary color</Box>);
    expect(screen.getByText('Primary color')).toHaveClass('bg-blue-50');

    rerender(<Box color="success">Success color</Box>);
    expect(screen.getByText('Success color')).toHaveClass('bg-green-50');

    rerender(<Box color="warning">Warning color</Box>);
    expect(screen.getByText('Warning color')).toHaveClass('bg-yellow-50');

    rerender(<Box color="danger">Danger color</Box>);
    expect(screen.getByText('Danger color')).toHaveClass('bg-red-50');
  });

  test('renders with correct element when as prop is provided', () => {
    const { rerender } = render(<Box as="section">Section box</Box>);
    expect(screen.getByText('Section box').tagName).toBe('SECTION');

    rerender(<Box as="article">Article box</Box>);
    expect(screen.getByText('Article box').tagName).toBe('ARTICLE');

    rerender(<Box as="main">Main box</Box>);
    expect(screen.getByText('Main box').tagName).toBe('MAIN');
  });

  test('applies custom className', () => {
    render(<Box className="custom-class">Custom class</Box>);
    expect(screen.getByText('Custom class')).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Box ref={ref}>Ref test</Box>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
