import { useEffect, useState } from 'react';
import {
  use,
  Event,
  type EventMap,
  type EventMessage,
} from '@react-mfe/common';
import { Message } from './message';

export function Messages() {
  const [messages, setMessages] = useState<EventMessage[]>([]);

  const event = use(Event<EventMap>);

  useEffect(() => {
    event.on('message', (message) => {
      if (message.to === 'shell') {
        setMessages((messages) => [...messages, message]);
      }
    });
  });

  return (
    <dl>
      {messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </dl>
  );
}
