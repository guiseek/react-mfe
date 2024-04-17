import {
  use,
  Event,
  onSubmit,
  type EventMap,
  type EventMessage,
} from '@react-mfe/common';

export function MessageForm() {
  const event = use(Event<EventMap>);

  const emit = (message: EventMessage) => {
    event.emit('message', message);
  };

  return (
    <form onSubmit={onSubmit(emit)}>
      <section>
        <label htmlFor="from">From</label>
        <input type="text" name="from" id="from" value="mfe2" readOnly />
      </section>
      <section>
        <label htmlFor="to">To</label>
        <select name="to" id="to">
          <option value="mfe1">MFE 1</option>
          <option value="shell">Shell</option>
        </select>
      </section>
      <section>
        <label htmlFor="data">Data</label>
        <textarea name="data" id="data"></textarea>
      </section>

      <button>Send</button>
    </form>
  );
}
