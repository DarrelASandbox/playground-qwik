import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Projector } from './projector';

export default component$(() => {
  const messageSignal = useSignal('');
  const colorSignal = useSignal('black');

  useTask$(({ track }) => {
    track(() => messageSignal.value);
    messageSignal.value.indexOf('llama') !== -1
      ? (colorSignal.value = 'red')
      : (colorSignal.value = 'black');
  });

  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type your search"
        onInput$={(e) => (messageSignal.value = (e.target as HTMLInputElement).value)}
      />
      <hr />
      <Projector message={messageSignal.value} color={colorSignal.value}>
        Slot component for Projector component
      </Projector>
    </div>
  );
});
