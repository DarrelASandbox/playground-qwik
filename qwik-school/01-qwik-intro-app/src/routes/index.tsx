import { Slot, component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);

  return (
    <>
      <div>Llamas</div>
      <button
        onClick$={() => {
          isMiskoVisibleSignal.value = !isMiskoVisibleSignal.value;
          console.log('Ahoj!');
        }}
      >
        Ahoj!
      </button>
      {isMiskoVisibleSignal.value && <Misko>This is a slot.</Misko>}
    </>
  );
});

const Misko = component$(() => (
  <div>
    <h1>Misko Component!!</h1>
    <Slot />
  </div>
));

export { Misko };
