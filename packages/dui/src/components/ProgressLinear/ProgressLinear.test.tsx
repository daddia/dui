import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressLinear } from './ProgressLinear';

describe('ProgressLinear', () => {
  it('renders a linear progress with default values', () => {
    render(<ProgressLinear />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveAttribute('aria-valuenow', '0');
    expect(progressElement).toHaveAttribute('aria-valuemin', '0');
    expect(progressElement).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders a linear progress with specified value', () => {
    render(<ProgressLinear value={42} />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).toHaveAttribute('aria-valuenow', '42');
    expect(progressElement).toHaveAttribute('aria-valuetext', '42%');
  });

  it('renders an indeterminate linear progress', () => {
    render(<ProgressLinear indeterminate />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).not.toHaveAttribute('aria-valuenow');
    expect(progressElement).not.toHaveAttribute('aria-valuetext');
  });

  it('renders linear progress with a label', () => {
    render(<ProgressLinear value={75} showLabel />);

    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders linear progress with a custom label', () => {
    render(<ProgressLinear value={60} showLabel label="Loading..." />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders linear progress with a formatted label', () => {
    render(
      <ProgressLinear value={42.5} showLabel formatLabel={(value) => `${value.toFixed(1)}%`} />,
    );

    expect(screen.getByText('42.5%')).toBeInTheDocument();
  });

  it('renders with buffer', () => {
    render(<ProgressLinear value={30} buffer={70} />);

    // We should have two progress bar elements
    const progressBarElements = document.querySelectorAll(
      '[class*="absolute left-0 top-0 h-full"]',
    );
    expect(progressBarElements.length).toBe(2);

    // The buffer element should have a width of 70%
    expect(progressBarElements[0]).toHaveStyle('width: 70%');

    // The main progress element should have a width of 30%
    expect(progressBarElements[1]).toHaveStyle('width: 30%');
  });

  it('applies different thickness correctly', () => {
    const { rerender } = render(<ProgressLinear thickness="xs" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-1');

    rerender(<ProgressLinear thickness="sm" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-2');

    rerender(<ProgressLinear thickness="md" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-3');

    rerender(<ProgressLinear thickness="lg" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-4');
  });

  it('renders label in different positions', () => {
    const { rerender } = render(<ProgressLinear value={60} showLabel labelPosition="top" />);

    // Label should be rendered above the progress bar
    const topLabel = screen.getByText('60%');
    expect(topLabel).toHaveClass('mb-1');

    rerender(<ProgressLinear value={60} showLabel labelPosition="right" />);

    // Label should be rendered to the right of the progress bar
    const rightLabel = screen.getByText('60%');
    expect(rightLabel).toHaveClass('ml-3');

    rerender(<ProgressLinear value={60} showLabel labelPosition="inside" />);

    // Label should be rendered inside the progress bar
    const insideLabel = screen.getByText('60%');
    expect(insideLabel).toHaveClass('absolute');
  });

  it('applies custom className', () => {
    render(<ProgressLinear className="test-class" />);

    expect(screen.getByRole('progressbar')).toHaveClass('test-class');
  });

  it('normalizes values to be between 0 and 100', () => {
    const { rerender } = render(<ProgressLinear value={-10} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');

    rerender(<ProgressLinear value={150} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });
});
