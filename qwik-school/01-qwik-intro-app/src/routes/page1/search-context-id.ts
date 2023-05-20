import type { Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

interface SearchContextState {
  messageSignal: Signal<string>;
  colorSignal: Signal<string>;
}

const searchContextId = createContextId<SearchContextState>('colorContext');

export { searchContextId };
