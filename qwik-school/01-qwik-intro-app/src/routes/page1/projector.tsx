import { component$ } from '@builder.io/qwik';

interface ProjectorProps {
  message: string;
}

const Projector = component$((props: ProjectorProps) => <div>{props.message}</div>);

export { Projector };
