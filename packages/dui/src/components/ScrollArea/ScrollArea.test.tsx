import React from 'react';
import { render } from '@testing-library/react';
import { ScrollArea } from './ScrollArea';

describe('ScrollArea', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ScrollArea className="h-72 w-48">
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
  });

  it('renders with orientation prop', () => {
    const { container } = render(
      <ScrollArea className="h-72 w-48" orientation="horizontal">
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();

    const scrollbars = container.querySelectorAll('[data-orientation="horizontal"]');
    expect(scrollbars.length).toBeGreaterThan(0);
  });

  it('renders with scrollbarSize prop', () => {
    const { container } = render(
      <ScrollArea className="h-72 w-48" scrollbarSize="lg">
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
  });

  it('renders with disabled prop', () => {
    const { container } = render(
      <ScrollArea className="h-72 w-48" disabled>
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();

    // When disabled, scrollbars should not be present
    const scrollbars = container.querySelectorAll('[data-radix-scroll-area-scrollbar]');
    expect(scrollbars.length).toBe(0);
  });

  it('renders with maxHeight prop', () => {
    const { container } = render(
      <ScrollArea maxHeight="150px">
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
    const viewport = container.querySelector('[data-radix-scroll-area-viewport]');
    expect(viewport).toHaveStyle({ maxHeight: '150px' });
  });

  it('renders with maxWidth prop', () => {
    const { container } = render(
      <ScrollArea maxWidth="200px">
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
    const viewport = container.querySelector('[data-radix-scroll-area-viewport]');
    expect(viewport).toHaveStyle({ maxWidth: '200px' });
  });

  it('renders with height and width props', () => {
    const { container } = render(
      <ScrollArea height="100px" width="150px">
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
    const viewport = container.querySelector('[data-radix-scroll-area-viewport]');
    expect(viewport).toHaveStyle({ height: '100px', width: '150px' });
  });

  it('renders with rounded prop set to false', () => {
    const { container } = render(
      <ScrollArea className="h-72 w-48" rounded={false} alwaysVisible>
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
  });

  it('renders with alwaysVisible prop', () => {
    const { container } = render(
      <ScrollArea className="h-72 w-48" alwaysVisible>
        <div>Content</div>
      </ScrollArea>,
    );
    expect(container).toBeInTheDocument();
  });
});
