import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContextMenu } from './ContextMenu';

// Mock the keyboard interactions since userEvent can't fully simulate right-click
jest.mock('@radix-ui/react-context-menu', () => {
  const actual = jest.requireActual('@radix-ui/react-context-menu');
  return {
    ...actual,
    Root: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="context-menu-root">{children}</div>
    ),
    Trigger: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="context-menu-trigger">{children}</div>
    ),
    Content: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="context-menu-content">{children}</div>
    ),
    Item: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="context-menu-item">{children}</div>
    ),
    Portal: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="context-menu-portal">{children}</div>
    ),
  };
});

describe('ContextMenu', () => {
  beforeEach(() => {
    // Clean up any previous test environment
    jest.clearAllMocks();
  });

  test('renders the ContextMenu trigger correctly', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>
          <div>Right click me</div>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Item 1</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );

    expect(screen.getByTestId('context-menu-trigger')).toBeInTheDocument();
    expect(screen.getByText('Right click me')).toBeInTheDocument();
  });

  test('renders all subcomponents correctly', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Label>My Label</ContextMenu.Label>
          <ContextMenu.Separator />
          <ContextMenu.Item>Regular Item</ContextMenu.Item>
          <ContextMenu.Item inset>Inset Item</ContextMenu.Item>
          <ContextMenu.Item destructive>Destructive Item</ContextMenu.Item>
          <ContextMenu.CheckboxItem checked>Checkbox Item</ContextMenu.CheckboxItem>
          <ContextMenu.RadioGroup value="option1">
            <ContextMenu.RadioItem value="option1">Radio 1</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="option2">Radio 2</ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
          <ContextMenu.Item>
            Item with shortcut
            <ContextMenu.Shortcut>⌘+S</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>More Options</ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item>Sub Item 1</ContextMenu.Item>
              <ContextMenu.Item>Sub Item 2</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
        </ContextMenu.Content>
      </ContextMenu>,
    );

    // While we're simulating components with the mocks, we can make sure certain content renders
    expect(screen.getByText('Right click me')).toBeInTheDocument();
    expect(screen.getByText('My Label')).toBeInTheDocument();
    expect(screen.getByText('Regular Item')).toBeInTheDocument();
    expect(screen.getByText('Inset Item')).toBeInTheDocument();
    expect(screen.getByText('Destructive Item')).toBeInTheDocument();
    expect(screen.getByText('Checkbox Item')).toBeInTheDocument();
    expect(screen.getByText('Radio 1')).toBeInTheDocument();
    expect(screen.getByText('Radio 2')).toBeInTheDocument();
    expect(screen.getByText('Item with shortcut')).toBeInTheDocument();
    expect(screen.getByText('⌘+S')).toBeInTheDocument();
    expect(screen.getByText('More Options')).toBeInTheDocument();
    expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
    expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
  });

  test('applies inset class to item when inset prop is true', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item data-testid="non-inset-item">Regular Item</ContextMenu.Item>
          <ContextMenu.Item data-testid="inset-item" inset>
            Inset Item
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );

    expect(screen.getByTestId('inset-item')).toHaveClass('pl-8');
  });

  test('applies destructive class to item when destructive prop is true', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item data-testid="normal-item">Regular Item</ContextMenu.Item>
          <ContextMenu.Item data-testid="destructive-item" destructive>
            Destructive Item
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );

    expect(screen.getByTestId('destructive-item')).toHaveClass('text-destructive');
  });

  test('applies custom className to components', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger className="custom-trigger">Right click me</ContextMenu.Trigger>
        <ContextMenu.Content className="custom-content">
          <ContextMenu.Item className="custom-item">Regular Item</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );

    expect(screen.getByTestId('context-menu-trigger')).toHaveClass('custom-trigger');
  });
});
