import { Slot, component$, useContext } from '@builder.io/qwik';
import { searchContextId } from './search-context-id';

const Projector = component$(() => {
  const { colorSignal: color, messageSignal: message } = useContext(searchContextId);

  return (
    <div>
      <Slot />
      <p style={'color:' + color.value}>{message.value}</p>
    </div>
  );
});

export { Projector };
