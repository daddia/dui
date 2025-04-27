import { tv } from 'tailwind-variants';

export const contextMenuVariants = tv({
  slots: {
    trigger: 'inline-block text-left',
    content: [
      'min-w-[8rem] overflow-hidden rounded-md',
      'border border-border bg-popover p-1 shadow-md',
      'z-50 animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-1',
      'data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
      'data-[side=top]:slide-in-from-bottom-1',
    ],
    item: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    checkboxItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    radioItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    label: 'px-2 py-1.5 text-sm font-semibold text-foreground',
    separator: '-mx-1 my-1 h-px bg-border',
    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',
    subTrigger: [
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground',
    ],
    subContent: [
      'min-w-[8rem] overflow-hidden rounded-md',
      'border border-border bg-popover p-1 text-popover-foreground shadow-md',
      'z-50 animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-1',
      'data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
      'data-[side=top]:slide-in-from-bottom-1',
    ],
    group: '',
    groupLabel: 'px-2 py-1.5 text-xs font-semibold text-muted-foreground',
    itemIndicator: 'absolute left-2 inline-flex items-center justify-center',
    radioIndicator: 'absolute left-2 inline-flex h-3.5 w-3.5 items-center justify-center',
  },
  variants: {
    inset: {
      true: {
        item: 'pl-8',
      },
    },
    destructive: {
      true: {
        item: 'text-destructive focus:bg-destructive focus:text-destructive-foreground',
      },
    },
  },
  defaultVariants: {
    inset: false,
    destructive: false,
  },
});
