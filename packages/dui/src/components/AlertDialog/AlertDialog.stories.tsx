import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  useAlertDialog,
} from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Feedback/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const WithDifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Small Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Small Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is a small alert dialog for shorter messages.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button>Continue</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Large Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Large Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is a large alert dialog for more complex scenarios with more content. It can
              accommodate more information and longer text without looking cramped. You might use
              this when you need to show additional details about the action the user is about to
              take.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button>Continue</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};

export const WithUseAlertDialogHook: Story = {
  render: () => <AlertDialogWithHook />,
};

function AlertDialogWithHook() {
  const { AlertDialog } = useAlertDialog({
    title: 'Delete Account',
    description:
      'Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.',
    actionText: 'Delete Account',
    cancelText: 'Cancel',
    actionVariant: 'destructive',
    onAction: () => console.log('Action clicked'),
    onCancel: () => console.log('Cancel clicked'),
  });

  return (
    <AlertDialog>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialog>
  );
}
