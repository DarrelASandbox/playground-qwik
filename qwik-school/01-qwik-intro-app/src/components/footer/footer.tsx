import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <select>
        <option>THE STYLES FOR beer-selector css SHOULD NOT BE APPLIED HERE</option>
      </select>
      I AM THE FOOTER
    </footer>
  );
});
