import {
  Slot,
  component$,
  useContext,
  useContextProvider,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import { beerContextId } from './beer-context-id';
import { BeerSelector } from './beer-selector';

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useContextProvider(beerContextId, didHeGetABeerSignal);

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

      <BeerGiver />
      {isMiskoVisibleSignal.value && <Misko>This is a slot.</Misko>}
    </>
  );
});

const BeerGiver = component$(() => (
  <div>
    <BeerGivingButton />
    <hr />
    <BeerSelector />
  </div>
));

const BeerGivingButton = component$(() => {
  const gotBeerSignal = useContext(beerContextId);
  return (
    <div>
      <button onClick$={() => (gotBeerSignal.value = true)}>Give a beer to Misko</button>
    </div>
  );
});

const Misko = component$(() => (
  <div>
    <h1>Misko Component!!</h1>
    <Slot />
    {/* Moved component from Client to SSR*/}
    {/* <BeerSelector /> */}
  </div>
));

export { Misko };
