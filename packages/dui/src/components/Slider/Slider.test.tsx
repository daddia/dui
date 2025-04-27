import React from 'react';
import { render, screen } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Slider defaultValue={[50]} label="Volume" />);
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('renders as disabled when specified', () => {
    render(<Slider defaultValue={[50]} disabled data-testid="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders with specified size', () => {
    render(<Slider defaultValue={[50]} size="lg" data-testid="slider" />);
    const thumbs = screen.getAllByRole('slider');
    expect(thumbs[0]).toHaveClass('h-5');
  });

  it('renders with step marks when specified', () => {
    render(
      <Slider defaultValue={[50]} min={0} max={100} step={10} showMarks data-testid="slider" />,
    );
    // We should have marks for steps (excluding min and max)
    const marks = document.querySelectorAll('[aria-hidden="true"]');
    expect(marks.length).toBeGreaterThan(0);
  });

  it('renders with value indicators when specified', () => {
    render(<Slider defaultValue={[50]} showValue data-testid="slider" />);
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('renders with custom value format', () => {
    render(
      <Slider
        defaultValue={[50]}
        showValue
        formatValue={(value) => `${value}%`}
        data-testid="slider"
      />,
    );
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('renders multiple thumbs for range values', () => {
    render(<Slider defaultValue={[25, 75]} data-testid="slider" />);
    const thumbs = screen.getAllByRole('slider');
    expect(thumbs.length).toBe(2);
  });

  it('renders with vertical orientation', () => {
    render(<Slider defaultValue={[50]} orientation="vertical" data-testid="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('data-orientation', 'vertical');
  });

  it('renders with the specified variant', () => {
    render(<Slider defaultValue={[50]} variant="gradient" data-testid="slider" />);
    const range = document.querySelector('[class*="bg-gradient-to-r"]');
    expect(range).toBeInTheDocument();
  });

  it('respects min and max values', () => {
    render(<Slider defaultValue={[0]} min={-50} max={50} showValue data-testid="slider" />);
    expect(screen.getByText('0')).toBeInTheDocument();
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('min', '-50');
    expect(slider).toHaveAttribute('max', '50');
  });

  it('respects step values', () => {
    render(<Slider defaultValue={[25]} step={25} data-testid="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('step', '25');
  });
});
