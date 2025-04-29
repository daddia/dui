/**
 * DUI Hooks - Organized by category for better developer experience
 *
 * These hooks are organized into logical categories to make them easier to find and use.
 * Each hook has been thoroughly documented with JSDoc comments.
 *
 * @module hooks
 */

// DOM and Element Hooks
export { useActivePress } from './use-active-press';
export { useDidElementMove } from './use-did-element-move';
export { useDocumentEvent } from './use-document-event';
export { useElementSize } from './use-element-size';
export { useEventListener } from './use-event-listener';
export { useInertOthers } from './use-inert-others';
export { useIntersectionObserver } from './use-intersection-observer';
export { useIsTouchDevice } from './use-is-touch-device';
export { useIsTopLayer } from './use-is-top-layer';
export { useOutsideClick } from './use-outside-click';
export { useOwnerDocument } from './use-owner';
export { useRefocusableInput } from './use-refocusable-input';
export { useResolvedTag } from './use-resolved-tag';
export { useResolveButtonType } from './use-resolve-button-type';
export { useRootContainers } from './use-root-containers';
export { useScrollLock } from './use-scroll-lock';
export { useSyncRefs } from './use-sync-refs';
export { useTextValue } from './use-text-value';
export { useTrackedPointer } from './use-tracked-pointer';
export { useTreeWalker } from './use-tree-walker';

// State Management Hooks
export { useByComparator } from './use-by-comparator';
export { useComputed } from './use-computed';
export { useControllable } from './use-controllable';
export { useDefaultValue } from './use-default-value';
export { useDisposables } from './use-disposables';
export { useEvent } from './use-event';
export { useFlags } from './use-flags';
export { useLatestValue } from './use-latest-value';
export { useLocalStorage } from './use-local-storage';
export { usePrevious } from './use-previous';
export { useStore } from './use-store';
export { useWatch } from './use-watch';

// Lifecycle Hooks
export { useIsInitialRender } from './use-is-initial-render';
export { useIsMounted } from './use-is-mounted';
export { useIsoMorphicEffect } from './use-iso-morphic-effect';
export { useOnDisappear } from './use-on-disappear';
export { useOnUnmount } from './use-on-unmount';
export { useServerHandoffComplete } from './use-server-handoff-complete';

// UI and Interaction Hooks
export { useCopyToClipboard } from './use-copy-to-clipboard';
export { useDebounce } from './use-debounce';
export { useEscape } from './use-escape';
export { useId } from './use-id';
export { useMediaQuery } from './use-media-query';
export { useIsMobile } from './use-mobile';
export { useQuickRelease } from './use-quick-release';
export { useTabDirection } from './use-tab-direction';
export { useThrottle } from './use-throttle';
export { useTransitionAuto as useTransition } from './use-transition';
export { useWindowEvent } from './use-window-event';
