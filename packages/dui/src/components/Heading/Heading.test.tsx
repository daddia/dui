import {render, screen} from '@testing-library/react';
import {Heading} from './Heading';

describe('Heading', () => {
  test('renders children correctly', () => {
    render(<Heading>Test content</Heading>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with correct heading level', () => {
    const {rerender} = render(<Heading level={1}>Heading 1</Heading>);
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    rerender(<Heading level={2}>Heading 2</Heading>);
    expect(screen.getByText('Heading 2').tagName).toBe('H2');

    rerender(<Heading level={3}>Heading 3</Heading>);
    expect(screen.getByText('Heading 3').tagName).toBe('H3');

    rerender(<Heading level={4}>Heading 4</Heading>);
    expect(screen.getByText('Heading 4').tagName).toBe('H4');

    rerender(<Heading level={5}>Heading 5</Heading>);
    expect(screen.getByText('Heading 5').tagName).toBe('H5');

    rerender(<Heading level={6}>Heading 6</Heading>);
    expect(screen.getByText('Heading 6').tagName).toBe('H6');
  });

  test('applies size classes correctly', () => {
    const {rerender} = render(<Heading size="xs">Extra Small</Heading>);
    expect(screen.getByText('Extra Small')).toHaveClass('text-lg/8');

    rerender(<Heading size="sm">Small</Heading>);
    expect(screen.getByText('Small')).toHaveClass('text-xl/8');

    rerender(<Heading size="base">Base</Heading>);
    expect(screen.getByText('Base')).toHaveClass('text-2xl/8');

    rerender(<Heading size="lg">Large</Heading>);
    expect(screen.getByText('Large')).toHaveClass('text-3xl/8');

    rerender(<Heading size="xl">Extra Large</Heading>);
    expect(screen.getByText('Extra Large')).toHaveClass('text-4xl/8');

    rerender(<Heading size="2xl">2XL</Heading>);
    expect(screen.getByText('2XL')).toHaveClass('text-5xl/8');

    rerender(<Heading size="3xl">3XL</Heading>);
    expect(screen.getByText('3XL')).toHaveClass('text-6xl/8');
  });

  test('applies weight classes correctly', () => {
    const {rerender} = render(<Heading weight="normal">Normal</Heading>);
    expect(screen.getByText('Normal')).toHaveClass('font-normal');

    rerender(<Heading weight="medium">Medium</Heading>);
    expect(screen.getByText('Medium')).toHaveClass('font-medium');

    rerender(<Heading weight="semibold">Semibold</Heading>);
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold');

    rerender(<Heading weight="bold">Bold</Heading>);
    expect(screen.getByText('Bold')).toHaveClass('font-bold');
  });

  test('applies alignment classes correctly', () => {
    const {rerender} = render(<Heading align="left">Left</Heading>);
    expect(screen.getByText('Left')).toHaveClass('text-left');

    rerender(<Heading align="center">Center</Heading>);
    expect(screen.getByText('Center')).toHaveClass('text-center');

    rerender(<Heading align="right">Right</Heading>);
    expect(screen.getByText('Right')).toHaveClass('text-right');
  });

  test('applies truncate class when truncate is true', () => {
    render(<Heading truncate>Truncated text</Heading>);
    expect(screen.getByText('Truncated text')).toHaveClass('truncate');
  });

  test('applies custom className', () => {
    render(<Heading className="custom-class">Custom class</Heading>);
    expect(screen.getByText('Custom class')).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Heading ref={ref}>Ref test</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });
});
