import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type your search"
        onKeyDown$={(e) => console.log(e.key)}
      />
      <hr />
      <div>You typed: </div>
    </div>
  );
});
