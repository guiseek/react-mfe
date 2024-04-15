import { Event, use, parse, type EventMap, type EventMessage } from '@react-mfe/common';
import React from 'react';


export function App() {
  const [message, setMessage] = React.useState<EventMessage>();

  const event = use(Event<EventMap>);

  event.on('message', (message) => {
    if (message.to === 'mfe1') {
      setMessage(message);
    }
  });

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    ev.stopPropagation()
    event.emit('message', parse(ev.currentTarget));
  };

  return (
    <div style={{flex: 1}}>
      <h2>MFE 1</h2>

      <hr />

      <em> <strong>From:</strong> {message?.from}</em>
      <p> <strong>Data:</strong> {message?.data}</p>

      <form onSubmit={onSubmit}>
        <section>
          <label htmlFor="from">From</label>
          <input type="text" name="from" id="from" value="mfe1" readOnly />
        </section>
        <section>
          <label htmlFor="to">To</label>
          <select name="to" id="to">
            <option value="mfe2">MFE 2</option>
            <option value="shell">Shell</option>
          </select>
        </section>
        <section>
          <label htmlFor="data">Data</label>
          <textarea name="data" id="data"></textarea>
        </section>

        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
