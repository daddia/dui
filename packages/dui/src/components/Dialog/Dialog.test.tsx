import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';

// Mock the Dialog component for testing since we can't easily test portals
jest.mock('@radix-ui/react-dialog', () => {
  const actual = jest.requireActual('@radix-ui/react-dialog');

  const Overlay = React.forwardRef<
    HTMLDivElement,
    { children?: React.ReactNode; className?: string }
  >(({ children, className }, ref) => (
    <div data-testid="dialog-overlay" className={className} ref={ref}>
      {children}
    </div>
  ));
  Overlay.displayName = 'MockOverlay';

  const Content = React.forwardRef<
    HTMLDivElement,
    { children?: React.ReactNode; className?: string }
  >(({ children, className }, ref) => (
    <div data-testid="dialog-content" className={className} ref={ref}>
      {children}
    </div>
  ));
  Content.displayName = 'MockContent';

  const Title = React.forwardRef<
    HTMLHeadingElement,
    { children?: React.ReactNode; className?: string }
  >(({ children, className }, ref) => (
    <h2 data-testid="dialog-title" className={className} ref={ref}>
      {children}
    </h2>
  ));
  Title.displayName = 'MockTitle';

  const Description = React.forwardRef<
    HTMLParagraphElement,
    { children?: React.ReactNode; className?: string }
  >(({ children, className }, ref) => (
    <p data-testid="dialog-description" className={className} ref={ref}>
      {children}
    </p>
  ));
  Description.displayName = 'MockDescription';

  const Close = React.forwardRef<
    HTMLButtonElement,
    { children?: React.ReactNode; className?: string }
  >(({ children, className }, ref) => (
    <button data-testid="dialog-close" className={className} ref={ref}>
      {children}
    </button>
  ));
  Close.displayName = 'MockClose';

  return {
    ...actual,
    Root: ({ children, open }: { children: React.ReactNode; open?: boolean }) => (
      <div data-testid="dialog-root" data-state={open ? 'open' : 'closed'}>
        {children}
      </div>
    ),
    Trigger: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="dialog-trigger">{children}</div>
    ),
    Portal: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="dialog-portal">{children}</div>
    ),
    Overlay,
    Content,
    Title,
    Description,
    Close,
  };
});

describe('Dialog', () => {
  beforeEach(() => {
    // Clean up any previous test environment
    jest.clearAllMocks();
  });

  test('renders Dialog components correctly', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog description goes here.</Dialog.Description>
          </Dialog.Header>
          <div>Content goes here</div>
          <Dialog.Footer>
            <Dialog.Close>Cancel</Dialog.Close>
            <button>Action</button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-trigger')).toBeInTheDocument();
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-content')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
    expect(screen.getByText('Dialog Title')).toBeInTheDocument();
    expect(screen.getByText('Dialog description goes here.')).toBeInTheDocument();
    expect(screen.getByText('Content goes here')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-close')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  test('applies size class correctly', () => {
    render(
      <Dialog>
        <Dialog.Content size="sm">Small Dialog</Dialog.Content>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-content')).toHaveClass('max-w-sm');
  });

  test('renders close button by default', () => {
    render(
      <Dialog>
        <Dialog.Content>Dialog Content</Dialog.Content>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-close')).toBeInTheDocument();
  });

  test('hides close button when showCloseButton is false', () => {
    render(
      <Dialog>
        <Dialog.Content showCloseButton={false}>Dialog Content</Dialog.Content>
      </Dialog>,
    );

    expect(screen.queryByTestId('dialog-close')).not.toBeInTheDocument();
  });

  test('Dialog Header has correct styles', () => {
    render(
      <Dialog>
        <Dialog.Content>
          <Dialog.Header data-testid="header">Header Content</Dialog.Header>
        </Dialog.Content>
      </Dialog>,
    );

    const header = screen.getByTestId('header');
    expect(header).toHaveClass('flex');
    expect(header).toHaveClass('flex-col');
    expect(header).toHaveClass('space-y-1.5');
  });

  test('Dialog Footer has correct styles', () => {
    render(
      <Dialog>
        <Dialog.Content>
          <Dialog.Footer data-testid="footer">Footer Content</Dialog.Footer>
        </Dialog.Content>
      </Dialog>,
    );

    expect(screen.getByTestId('footer')).toHaveClass('flex');
  });

  test('can pass additional className to components', () => {
    render(
      <Dialog>
        <Dialog.Content className="test-class">
          <Dialog.Title className="title-class">Test Title</Dialog.Title>
          <Dialog.Description className="desc-class">Test Description</Dialog.Description>
        </Dialog.Content>
      </Dialog>,
    );

    expect(screen.getByTestId('dialog-content')).toHaveClass('test-class');
    expect(screen.getByTestId('dialog-title')).toHaveClass('title-class');
    expect(screen.getByTestId('dialog-description')).toHaveClass('desc-class');
  });
});
