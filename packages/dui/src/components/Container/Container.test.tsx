import {render, screen} from '@testing-library/react';
import {Container} from './Container';

describe('Container', () => {
  it('renders with default props', () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom maxWidth class', () => {
    render(<Container maxWidth="sm">Test Content</Container>);
    const container = screen.getByText('Test Content').closest('div');
    expect(container).toHaveClass('max-w-sm');
  });

  it('applies centered class when centered is true', () => {
    render(<Container centered>Test Content</Container>);
    const container = screen.getByText('Test Content').closest('div');
    expect(container).toHaveClass('mx-auto');
  });

  it('does not apply centered class when centered is false', () => {
    render(<Container centered={false}>Test Content</Container>);
    const container = screen.getByText('Test Content').closest('div');
    expect(container).not.toHaveClass('mx-auto');
  });

  it('applies padding classes when padded is true', () => {
    render(<Container padded>Test Content</Container>);
    const container = screen.getByText('Test Content').closest('div');
    expect(container).toHaveClass('px-4 sm:px-6 lg:px-8');
  });

  it('does not apply padding classes when padded is false', () => {
    render(<Container padded={false}>Test Content</Container>);
    const container = screen.getByText('Test Content').closest('div');
    expect(container).not.toHaveClass('px-4 sm:px-6 lg:px-8');
  });

  it('merges custom className with default classes', () => {
    render(<Container className="custom-class">Test Content</Container>);
    const container = screen.getByText('Test Content').closest('div');
    expect(container).toHaveClass('custom-class');
  });
});
