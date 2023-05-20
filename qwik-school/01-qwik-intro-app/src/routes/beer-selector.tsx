import { Resource, component$, useResource$ } from '@builder.io/qwik';

interface Beer {
  id: number;
  name: string;
}

const BeerSelector = component$(() => {
  const beersResource = useResource$<Beer[]>(async () => {
    // Can use `fetch` for both server and client
    const result = await fetch('http://localhost:5173/api/beers');
    return result.json();
  });

  return (
    <div>
      <Resource
        value={beersResource}
        // On the current version of Qwik loading state is only available for client side and not SSR
        onPending={() => <span>Loading...</span>}
        onRejected={(e) => <span>Error: {e}</span>}
        onResolved={(beers) => (
          <select>
            {beers.map((beer) => {
              return <option key={beer.id}>{beer.name}</option>;
            })}
          </select>
        )}
      />
    </div>
  );
});

export { BeerSelector };
