import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <Misko />
      <div>Llamas</div>
      <button onClick$={() => console.log('Ahoj!')}>Ahoj!</button>
    </>
  );
});

const Misko = component$(() => <h1>Misko!</h1>);

export { Misko };
