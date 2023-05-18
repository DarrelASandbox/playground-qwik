import type { Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

// Generally, you want to differentiate between reusable and contextual components
// Use context if the component is less reusable
const beerContextId = createContextId<Signal<boolean>>('beerContext');

export { beerContextId };
