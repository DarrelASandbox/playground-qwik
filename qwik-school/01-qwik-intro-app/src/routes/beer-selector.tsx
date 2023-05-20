import { component$ } from '@builder.io/qwik';

interface Beer {
  name: string;
}

const BeerSelector = component$(() => {
  // http://localhost:5173/api/beers
  const beers: Beer[] = [{ name: 'Ale' }, { name: 'Stout' }];

  return (
    <div>
      <select>
        {beers.map((beer) => (
          <option>{beer.name}</option>
        ))}
      </select>
    </div>
  );
});

export { BeerSelector };
