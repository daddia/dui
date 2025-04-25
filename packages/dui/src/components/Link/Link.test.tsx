import {render, screen} from '@testing-library/react';
import {Link} from './Link';

describe('Link', () => {
  test('renders children correctly', () => {
    render(<Link href="#">Test content</Link>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('applies href correctly', () => {
    render(<Link href="https://example.com">Test link</Link>);
    expect(screen.getByText('Test link')).toHaveAttribute('href', 'https://example.com');
  });

  test('applies size classes correctly', () => {
    const {rerender} = render(
      <Link href="#" size="xs">
        Extra Small
      </Link>,
    );
    expect(screen.getByText('Extra Small')).toHaveClass('text-xs');

    rerender(
      <Link href="#" size="sm">
        Small
      </Link>,
    );
    expect(screen.getByText('Small')).toHaveClass('text-sm');

    rerender(
      <Link href="#" size="base">
        Base
      </Link>,
    );
    expect(screen.getByText('Base')).toHaveClass('text-base');

    rerender(
      <Link href="#" size="lg">
        Large
      </Link>,
    );
    expect(screen.getByText('Large')).toHaveClass('text-lg');
  });

  test('applies weight classes correctly', () => {
    const {rerender} = render(
      <Link href="#" weight="normal">
        Normal
      </Link>,
    );
    expect(screen.getByText('Normal')).toHaveClass('font-normal');

    rerender(
      <Link href="#" weight="medium">
        Medium
      </Link>,
    );
    expect(screen.getByText('Medium')).toHaveClass('font-medium');

    rerender(
      <Link href="#" weight="semibold">
        Semibold
      </Link>,
    );
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold');

    rerender(
      <Link href="#" weight="bold">
        Bold
      </Link>,
    );
    expect(screen.getByText('Bold')).toHaveClass('font-bold');
  });

  test('applies color classes correctly', () => {
    const {rerender} = render(
      <Link href="#" color="default">
        Default
      </Link>,
    );
    expect(screen.getByText('Default')).toHaveClass('text-zinc-950');

    rerender(
      <Link href="#" color="muted">
        Muted
      </Link>,
    );
    expect(screen.getByText('Muted')).toHaveClass('text-zinc-500');

    rerender(
      <Link href="#" color="primary">
        Primary
      </Link>,
    );
    expect(screen.getByText('Primary')).toHaveClass('text-blue-600');

    rerender(
      <Link href="#" color="success">
        Success
      </Link>,
    );
    expect(screen.getByText('Success')).toHaveClass('text-green-600');

    rerender(
      <Link href="#" color="warning">
        Warning
      </Link>,
    );
    expect(screen.getByText('Warning')).toHaveClass('text-yellow-600');

    rerender(
      <Link href="#" color="danger">
        Danger
      </Link>,
    );
    expect(screen.getByText('Danger')).toHaveClass('text-red-600');
  });

  test('applies underline class when underline is true', () => {
    render(
      <Link href="#" underline>
        Underlined
      </Link>,
    );
    expect(screen.getByText('Underlined')).toHaveClass('underline');
  });

  test('applies no-underline class when underline is false', () => {
    render(
      <Link href="#" underline={false}>
        Not underlined
      </Link>,
    );
    expect(screen.getByText('Not underlined')).toHaveClass('no-underline');
  });

  test('applies external link attributes when external is true', () => {
    render(
      <Link href="https://example.com" external>
        External link
      </Link>,
    );
    const link = screen.getByText('External link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('after:ml-1');
  });

  test('applies custom className', () => {
    render(
      <Link href="#" className="custom-class">
        Custom class
      </Link>,
    );
    expect(screen.getByText('Custom class')).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <Link href="#" ref={ref}>
        Ref test
      </Link>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  test('applies hover styles', () => {
    render(<Link href="#">Hover test</Link>);
    const link = screen.getByText('Hover test');
    expect(link).toHaveClass('hover:decoration-zinc-950');
    expect(link).toHaveClass('dark:hover:decoration-white');
  });
});
