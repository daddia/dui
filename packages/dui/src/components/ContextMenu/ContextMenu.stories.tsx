import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from './ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Navigation/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A context menu component that displays a menu when triggered by a right-click.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

/**
 * Basic usage of a ContextMenu with items.
 */
export const Basic: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>View Profile</ContextMenu.Item>
          <ContextMenu.Item>Copy Link</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Share</ContextMenu.Item>
          <ContextMenu.Item destructive>Delete</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};

/**
 * ContextMenu with different section labels.
 */
export const WithSections: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Label>Account Actions</ContextMenu.Label>
          <ContextMenu.Item>View Profile</ContextMenu.Item>
          <ContextMenu.Item>Settings</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Label>Content Actions</ContextMenu.Label>
          <ContextMenu.Item>Copy</ContextMenu.Item>
          <ContextMenu.Item>Paste</ContextMenu.Item>
          <ContextMenu.Item>Cut</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item destructive>Delete</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};

/**
 * ContextMenu with keyboard shortcuts.
 */
export const WithShortcuts: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>
            Copy
            <ContextMenu.Shortcut>⌘+C</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Paste
            <ContextMenu.Shortcut>⌘+V</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Cut
            <ContextMenu.Shortcut>⌘+X</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>
            Select All
            <ContextMenu.Shortcut>⌘+A</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>
            Save
            <ContextMenu.Shortcut>⌘+S</ContextMenu.Shortcut>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};

/**
 * ContextMenu with nested submenus.
 */
export const WithSubmenus: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Back</ContextMenu.Item>
          <ContextMenu.Item>Forward</ContextMenu.Item>
          <ContextMenu.Item>Reload</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item>Save Page As...</ContextMenu.Item>
              <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
              <ContextMenu.Item>Name Window...</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Developer Tools</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.Item>Print...</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};

/**
 * ContextMenu with checkboxes and radio items.
 */
export const WithCheckboxAndRadio: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Label>Preferences</ContextMenu.Label>
          <ContextMenu.CheckboxItem checked>Show Status Bar</ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem>Always Show Bookmarks</ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.Label>View</ContextMenu.Label>
          <ContextMenu.RadioGroup value="compact">
            <ContextMenu.RadioItem value="comfortable">Comfortable</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="compact">Compact</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="condensed">Condensed</ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};

/**
 * ContextMenu with inset items.
 */
export const WithInsetItems: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Regular Item</ContextMenu.Item>
          <ContextMenu.Item inset>Inset Item 1</ContextMenu.Item>
          <ContextMenu.Item inset>Inset Item 2</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Another Regular Item</ContextMenu.Item>
          <ContextMenu.Item inset>Another Inset Item</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};

/**
 * ContextMenu with destructive items.
 */
export const WithDestructiveItems: Story = {
  render: () => (
    <div className="border-border flex h-[200px] w-full items-center justify-center rounded-md border border-dashed">
      <ContextMenu>
        <ContextMenu.Trigger className="flex h-full w-full items-center justify-center">
          <span>Right click here</span>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>View</ContextMenu.Item>
          <ContextMenu.Item>Edit</ContextMenu.Item>
          <ContextMenu.Item>Duplicate</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item destructive>Archive</ContextMenu.Item>
          <ContextMenu.Item destructive>Delete</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  ),
};
