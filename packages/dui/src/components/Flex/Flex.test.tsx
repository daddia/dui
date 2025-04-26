import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders with default props', () => {
    render(<Flex>Test Content</Flex>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom direction class', () => {
    render(<Flex direction="column">Test Content</Flex>);
    const flex = screen.getByText('Test Content').closest('div');
    expect(flex).toHaveClass('flex-col');
  });

  it('applies custom wrap class', () => {
    render(<Flex wrap="wrap">Test Content</Flex>);
    const flex = screen.getByText('Test Content').closest('div');
    expect(flex).toHaveClass('flex-wrap');
  });

  it('applies custom gap class', () => {
    render(<Flex gap="lg">Test Content</Flex>);
    const flex = screen.getByText('Test Content').closest('div');
    expect(flex).toHaveClass('gap-6');
  });

  it('applies custom align class', () => {
    render(<Flex align="center">Test Content</Flex>);
    const flex = screen.getByText('Test Content').closest('div');
    expect(flex).toHaveClass('items-center');
  });

  it('applies custom justify class', () => {
    render(<Flex justify="between">Test Content</Flex>);
    const flex = screen.getByText('Test Content').closest('div');
    expect(flex).toHaveClass('justify-between');
  });

  it('merges custom className with default classes', () => {
    render(<Flex className="custom-class">Test Content</Flex>);
    const flex = screen.getByText('Test Content').closest('div');
    expect(flex).toHaveClass('custom-class');
  });
});
