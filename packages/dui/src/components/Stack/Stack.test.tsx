import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders with default props', () => {
    render(<Stack>Test Content</Stack>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies vertical direction class by default', () => {
    render(<Stack>Test Content</Stack>);
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('flex-col');
  });

  it('applies horizontal direction class', () => {
    render(<Stack direction="horizontal">Test Content</Stack>);
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('flex-row');
  });

  it('applies custom spacing class', () => {
    render(<Stack spacing="lg">Test Content</Stack>);
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('gap-6');
  });

  it('applies custom align class', () => {
    render(<Stack align="center">Test Content</Stack>);
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('items-center');
  });

  it('applies reverse class for horizontal direction', () => {
    render(
      <Stack direction="horizontal" reverse>
        Test Content
      </Stack>,
    );
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('flex-row-reverse');
  });

  it('applies reverse class for vertical direction', () => {
    render(
      <Stack direction="vertical" reverse>
        Test Content
      </Stack>,
    );
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('flex-col-reverse');
  });

  it('merges custom className with default classes', () => {
    render(<Stack className="custom-class">Test Content</Stack>);
    const stack = screen.getByText('Test Content').closest('div');
    expect(stack).toHaveClass('custom-class');
  });
});
