import type { Signal } from '@builder.io/qwik';
import { Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useTask$(({ track }) => {
    // Don't execute the code unless the value changes
    track(() => didHeGetABeerSignal.value);
    if (didHeGetABeerSignal.value) isMiskoVisibleSignal.value = true;
  });

  return (
    <>
      <button onClick$={() => (isMiskoVisibleSignal.value = !isMiskoVisibleSignal.value)}>
        Ahoj!
      </button>

      <BeerGiver gotBeerSignal={didHeGetABeerSignal} />
      {isMiskoVisibleSignal.value && <Misko>This is a slot.</Misko>}
    </>
  );
});

interface BeerGiverProps {
  gotBeerSignal: Signal<boolean>;
}

const BeerGiver = component$((props: BeerGiverProps) => (
  <div>
    <button onClick$={() => (props.gotBeerSignal.value = true)}>
      Give a beer to Misko
    </button>
  </div>
));

const Misko = component$(() => (
  <div>
    <h1>Misko Component!!</h1>
    <Slot />
  </div>
));

export { Misko };
