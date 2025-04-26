import { render, screen } from '@testing-library/react';
import { Subheading } from './Subheading';

describe('Subheading', () => {
  test('renders children correctly', () => {
    render(<Subheading>Test content</Subheading>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with correct heading level', () => {
    const { rerender } = render(<Subheading level={1}>Subheading 1</Subheading>);
    expect(screen.getByText('Subheading 1').tagName).toBe('H1');

    rerender(<Subheading level={2}>Subheading 2</Subheading>);
    expect(screen.getByText('Subheading 2').tagName).toBe('H2');

    rerender(<Subheading level={3}>Subheading 3</Subheading>);
    expect(screen.getByText('Subheading 3').tagName).toBe('H3');

    rerender(<Subheading level={4}>Subheading 4</Subheading>);
    expect(screen.getByText('Subheading 4').tagName).toBe('H4');

    rerender(<Subheading level={5}>Subheading 5</Subheading>);
    expect(screen.getByText('Subheading 5').tagName).toBe('H5');

    rerender(<Subheading level={6}>Subheading 6</Subheading>);
    expect(screen.getByText('Subheading 6').tagName).toBe('H6');
  });

  test('applies default styling correctly', () => {
    render(<Subheading>Default styling</Subheading>);
    const element = screen.getByText('Default styling');
    expect(element).toHaveClass('text-base/7');
    expect(element).toHaveClass('font-semibold');
    expect(element).toHaveClass('text-zinc-950');
    expect(element).toHaveClass('sm:text-sm/6');
  });

  test('applies custom className', () => {
    render(<Subheading className="custom-class">Custom class</Subheading>);
    expect(screen.getByText('Custom class')).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Subheading ref={ref}>Ref test</Subheading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });
});
