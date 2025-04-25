import {render, screen} from '@testing-library/react';
import {Grid} from './Grid';

describe('Grid', () => {
  it('renders with default props', () => {
    render(<Grid>Test Content</Grid>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom columns class', () => {
    render(<Grid columns={3}>Test Content</Grid>);
    const grid = screen.getByText('Test Content').closest('div');
    expect(grid).toHaveClass('grid-cols-3');
  });

  it('applies custom gap class', () => {
    render(<Grid gap="lg">Test Content</Grid>);
    const grid = screen.getByText('Test Content').closest('div');
    expect(grid).toHaveClass('gap-6');
  });

  it('applies custom align class', () => {
    render(<Grid align="center">Test Content</Grid>);
    const grid = screen.getByText('Test Content').closest('div');
    expect(grid).toHaveClass('items-center');
  });

  it('applies custom justify class', () => {
    render(<Grid justify="between">Test Content</Grid>);
    const grid = screen.getByText('Test Content').closest('div');
    expect(grid).toHaveClass('justify-between');
  });

  it('merges custom className with default classes', () => {
    render(<Grid className="custom-class">Test Content</Grid>);
    const grid = screen.getByText('Test Content').closest('div');
    expect(grid).toHaveClass('custom-class');
  });
});
