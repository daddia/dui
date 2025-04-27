import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('renders with default checked state', () => {
    render(<Switch defaultChecked data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('responds to clicks', () => {
    render(<Switch defaultChecked={false} data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');

    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('calls onCheckedChange when clicked', () => {
    const onCheckedChange = jest.fn();
    render(<Switch onCheckedChange={onCheckedChange} data-testid="switch" />);

    const switchElement = screen.getByTestId('switch');
    fireEvent.click(switchElement);

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('does not respond to clicks when disabled', () => {
    const onCheckedChange = jest.fn();
    render(<Switch disabled onCheckedChange={onCheckedChange} data-testid="switch" />);

    const switchElement = screen.getByTestId('switch');
    fireEvent.click(switchElement);

    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('does not respond to clicks when read-only', () => {
    const onCheckedChange = jest.fn();
    render(<Switch readOnly onCheckedChange={onCheckedChange} data-testid="switch" />);

    const switchElement = screen.getByTestId('switch');
    fireEvent.click(switchElement);

    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('renders with a label', () => {
    render(<Switch label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders with a description', () => {
    render(<Switch label="Test Label" description="This is a description" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with a required indicator', () => {
    render(<Switch label="Test Label" required />);

    const label = screen.getByText('Test Label');
    expect(label.nextSibling).toHaveTextContent('*');
  });

  it('renders with label on the left when specified', () => {
    render(<Switch label="Test Label" labelPosition="left" />);

    const container = screen.getByText('Test Label').closest('div');
    expect(container).toHaveClass('flex-row-reverse');
  });

  it('renders with correct size', () => {
    render(<Switch size="lg" data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveClass('h-7');
  });

  it('renders with correct variant', () => {
    render(<Switch variant="success" defaultChecked data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveClass('data-[state=checked]:bg-success');
  });

  it('associates the label with the switch using the correct ID', () => {
    render(<Switch label="Test Label" id="test-id" />);

    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-id');

    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('id', 'test-id');
  });
});
