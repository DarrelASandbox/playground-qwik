import { Slot, component$ } from '@builder.io/qwik';

interface ProjectorProps {
  message: string;
}

const Projector = component$((props: ProjectorProps) => (
  <div>
    <Slot />
    <p>{props.message}</p>
  </div>
));

export { Projector };
