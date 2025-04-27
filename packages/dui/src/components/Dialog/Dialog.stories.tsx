import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * Basic usage of a Dialog with a trigger button, header, content, and footer.
 */
export const Basic: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit Profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
        </Dialog.Header>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              defaultValue="John Doe"
              className="border-border col-span-3 rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              defaultValue="@johndoe"
              className="border-border col-span-3 rounded-md border px-3 py-2 text-sm"
            />
          </div>
        </div>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

/**
 * Different sizes of dialogs can be created using the size prop.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
        <Dialog key={size}>
          <Dialog.Trigger asChild>
            <Button variant="outline">{size}</Button>
          </Dialog.Trigger>
          <Dialog.Content size={size}>
            <Dialog.Header>
              <Dialog.Title>{size} Dialog</Dialog.Title>
              <Dialog.Description>This is a {size} sized dialog.</Dialog.Description>
            </Dialog.Header>
            <div className="py-4">
              <p>
                The content of the dialog changes its max-width based on the selected size. This one
                is set to &quot;{size}&quot;.
              </p>
            </div>
            <Dialog.Footer>
              <Button>Close</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      ))}
    </div>
  ),
};

/**
 * Dialog without a close button.
 */
export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>No Close Button</Button>
      </Dialog.Trigger>
      <Dialog.Content showCloseButton={false}>
        <Dialog.Header>
          <Dialog.Title>No Close Button</Dialog.Title>
          <Dialog.Description>
            This dialog doesn&apos;t have a close button in the corner.
          </Dialog.Description>
        </Dialog.Header>
        <div className="py-4">
          <p>You can still close this dialog by:</p>
          <ul className="ml-6 list-disc">
            <li>Clicking outside</li>
            <li>Pressing the Escape key</li>
            <li>Using an explicit close button (like below)</li>
          </ul>
        </div>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button>Close Dialog</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

/**
 * Dialog that prevents closing by outside click or escape key.
 */
export const ForcedDialog: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Forced Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content closeOnClickOutside={false} closeOnEscape={false}>
        <Dialog.Header>
          <Dialog.Title>Forced Dialog</Dialog.Title>
          <Dialog.Description>
            This dialog can only be closed by the action button.
          </Dialog.Description>
        </Dialog.Header>
        <div className="py-4">
          <p>This dialog cannot be closed by:</p>
          <ul className="ml-6 list-disc">
            <li>Clicking outside</li>
            <li>Pressing the Escape key</li>
          </ul>
          <p className="mt-2">It can only be closed using the button below:</p>
        </div>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button>Close Dialog</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

/**
 * Dialog with custom content layout.
 */
export const CustomLayout: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Custom Layout</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="bg-muted shrink-0 rounded-lg p-6 sm:w-1/3">
            <Dialog.Title>Settings</Dialog.Title>
            <Dialog.Description>Configure your account settings.</Dialog.Description>
            <div className="mt-4">
              <ul className="space-y-2">
                <li className="bg-accent rounded-md p-2 font-medium">Profile</li>
                <li className="rounded-md p-2">Notifications</li>
                <li className="rounded-md p-2">Appearance</li>
                <li className="rounded-md p-2">Security</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="space-y-4 py-2">
              <div>
                <h4 className="mb-2 text-sm font-medium">Profile Picture</h4>
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="text-xl">JD</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Change
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="display-name" className="text-sm font-medium">
                  Display Name
                </label>
                <input
                  id="display-name"
                  defaultValue="John Doe"
                  className="border-border rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="border-border rounded-md border px-3 py-2 text-sm"
                />
              </div>
            </div>
            <Dialog.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </Dialog.Footer>
          </div>
        </div>
      </Dialog.Content>
    </Dialog>
  ),
};

/**
 * Dialog with long content that scrolls.
 */
export const ScrollingContent: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Scrolling Content</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Terms of Service</Dialog.Title>
          <Dialog.Description>Please read our terms and conditions.</Dialog.Description>
        </Dialog.Header>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="space-y-4 py-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium">Section {i + 1}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                  rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non
                  est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
                  dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit
                  odio.
                </p>
              </div>
            ))}
          </div>
        </div>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">Decline</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button>Accept</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};
