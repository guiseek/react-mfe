import { type EventMessage } from '@react-mfe/common';

interface MessageProps {
  message: EventMessage;
}

export function Message({ message }: MessageProps) {
  return (
    <>
      <dt>
        <em>{message.from}</em>
      </dt>
      <dd>{message.data}</dd>
    </>
  );
}
