import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressCircular } from './ProgressCircular';

describe('ProgressCircular', () => {
  it('renders a circular progress with default values', () => {
    render(<ProgressCircular />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveAttribute('aria-valuenow', '0');
    expect(progressElement).toHaveAttribute('aria-valuemin', '0');
    expect(progressElement).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders a circular progress with specified value', () => {
    render(<ProgressCircular value={42} />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).toHaveAttribute('aria-valuenow', '42');
    expect(progressElement).toHaveAttribute('aria-valuetext', '42%');
  });

  it('renders an indeterminate circular progress', () => {
    render(<ProgressCircular indeterminate />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).not.toHaveAttribute('aria-valuenow');
    expect(progressElement).not.toHaveAttribute('aria-valuetext');
  });

  it('renders circular progress with a label', () => {
    render(<ProgressCircular value={75} showLabel />);

    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders circular progress with a custom label', () => {
    render(<ProgressCircular value={60} showLabel label="Loading..." />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders circular progress with a formatted label', () => {
    render(
      <ProgressCircular value={42.5} showLabel formatLabel={(value) => `${value.toFixed(1)}%`} />,
    );

    expect(screen.getByText('42.5%')).toBeInTheDocument();
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<ProgressCircular size="sm" />);
    expect(screen.getByRole('progressbar')).toHaveClass('size-8');

    rerender(<ProgressCircular size="md" />);
    expect(screen.getByRole('progressbar')).toHaveClass('size-12');

    rerender(<ProgressCircular size="lg" />);
    expect(screen.getByRole('progressbar')).toHaveClass('size-16');
  });

  it('applies custom className', () => {
    render(<ProgressCircular className="test-class" />);

    expect(screen.getByRole('progressbar')).toHaveClass('test-class');
  });

  it('normalizes values to be between 0 and 100', () => {
    const { rerender } = render(<ProgressCircular value={-10} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');

    rerender(<ProgressCircular value={150} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });
});
