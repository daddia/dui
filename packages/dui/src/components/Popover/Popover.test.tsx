import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Popover } from './Popover';
import { Button } from '../Button';

describe('Popover', () => {
  it('should render a Popover trigger', () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>Popover Content</Popover.Content>
      </Popover>,
    );

    expect(screen.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
  });

  it('should open popover when clicking the trigger', () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>Popover Content</Popover.Content>
      </Popover>,
    );

    // Initially, content should not be in the document
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();

    // Click the trigger button
    fireEvent.click(screen.getByRole('button', { name: 'Open Popover' }));

    // Now content should be visible
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  it('should close popover when clicking outside', () => {
    render(
      <div>
        <Popover>
          <Popover.Trigger>
            <Button>Open Popover</Button>
          </Popover.Trigger>
          <Popover.Content>Popover Content</Popover.Content>
        </Popover>
        <div data-testid="outside">Outside Element</div>
      </div>,
    );

    // Open the popover
    fireEvent.click(screen.getByRole('button', { name: 'Open Popover' }));

    // Content should be visible
    expect(screen.getByText('Popover Content')).toBeInTheDocument();

    // Click outside
    fireEvent.mouseDown(screen.getByTestId('outside'));

    // Content should not be in the document
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('should render popover with arrow', () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          Popover Content
          <Popover.Arrow />
        </Popover.Content>
      </Popover>,
    );

    // Open the popover
    fireEvent.click(screen.getByRole('button', { name: 'Open Popover' }));

    // Arrow should be rendered
    expect(screen.getByText('Popover Content').parentElement).toContainElement(
      document.querySelector('[data-radix-popover-arrow]'),
    );
  });

  it('should render popover with different sizes', () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content size="sm">Small Popover</Popover.Content>
      </Popover>,
    );

    // Open the popover
    fireEvent.click(screen.getByRole('button', { name: 'Open Popover' }));

    // Content should have the small size class
    expect(screen.getByText('Small Popover').parentElement).toHaveClass('p-2');
  });

  it('should close popover when clicking close button', () => {
    render(
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content showCloseButton>Popover Content</Popover.Content>
      </Popover>,
    );

    // Open the popover
    fireEvent.click(screen.getByRole('button', { name: 'Open Popover' }));

    // Content should be visible
    expect(screen.getByText('Popover Content')).toBeInTheDocument();

    // Close button should be visible
    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).toBeInTheDocument();

    // Click the close button
    fireEvent.click(closeButton);

    // Content should not be in the document
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('should handle controlled open state', () => {
    const ControlledPopover = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <div>
          <button onClick={() => setOpen(true)} data-testid="external-open">
            External Open
          </button>
          <button onClick={() => setOpen(false)} data-testid="external-close">
            External Close
          </button>
          <Popover open={open} onOpenChange={setOpen}>
            <Popover.Trigger>
              <Button>Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content>Controlled Popover</Popover.Content>
          </Popover>
        </div>
      );
    };

    render(<ControlledPopover />);

    // Initially, content should not be in the document
    expect(screen.queryByText('Controlled Popover')).not.toBeInTheDocument();

    // Click the external open button
    fireEvent.click(screen.getByTestId('external-open'));

    // Content should be visible
    expect(screen.getByText('Controlled Popover')).toBeInTheDocument();

    // Click the external close button
    fireEvent.click(screen.getByTestId('external-close'));

    // Content should not be in the document
    expect(screen.queryByText('Controlled Popover')).not.toBeInTheDocument();
  });
});
