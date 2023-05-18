import { Slot, component$ } from '@builder.io/qwik';

interface ProjectorProps {
  message: string;
  color: string;
}

const Projector = component$((props: ProjectorProps) => (
  <div>
    <Slot />
    <p style={'color:' + props.color}>{props.message}</p>
  </div>
));

export { Projector };
