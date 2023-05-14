import { component$, useSignal } from '@builder.io/qwik';

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
      {isMiskoVisibleSignal.value && <Misko />}
    </>
  );
});

const Misko = component$(() => <h1>Misko Component!!</h1>);

export { Misko };
