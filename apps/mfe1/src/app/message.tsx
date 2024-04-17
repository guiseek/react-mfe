import { useEffect, useState } from 'react';
import {
  use,
  Event,
  type EventMap,
  type EventMessage,
} from '@react-mfe/common';

export function Message() {
  const [message, setMessage] = useState<EventMessage>();

  const event = use(Event<EventMap>);

  useEffect(() => {
    event.on('message', (message) => {
      if (message.to === 'mfe1') {
        setMessage(message);
      }
    });
  });

  return (
    <>
      <em>
        <strong>From:</strong> {message?.from}
      </em>
      <p>
        <strong>Data:</strong> {message?.data}
      </p>
    </>
  );
}
