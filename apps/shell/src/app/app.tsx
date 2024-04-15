import * as React from 'react';
import {
  Event,
  add,
  use,
  type EventMap,
  type EventMessage,
} from '@react-mfe/common';
import { Link, Route, Routes } from 'react-router-dom';
import { loadRemoteModule } from '@nx/react/mf';

import { Home } from './home';

add(Event);

const Mfe1 = React.lazy(() => loadRemoteModule('mfe1', './Module'));

const Mfe2 = React.lazy(() => loadRemoteModule('mfe2', './Module'));

export function App() {
  const [message, setMessage] = React.useState<EventMessage>();

  const event = use(Event<EventMap>);

  event.on('message', (message) => {
    if (message.to === 'shell') {
      setMessage(message);
    }
  });

  return (
    <React.Suspense fallback={null}>
      <h1>Shell</h1>

      <hr />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/mfes">Mfes</Link>
        </li>

        <li>
          <Link to="/mfe1">Mfe1</Link>
        </li>

        <li>
          <Link to="/mfe2">Mfe2</Link>
        </li>
      </ul>

      <hr />

      <em>
        {' '}
        <strong>From:</strong> {message?.from}
      </em>
      <p>
        {' '}
        <strong>Data:</strong> {message?.data}
      </p>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/mfes"
          element={
            <main>
              <Mfe1 />
              <Mfe2 />
            </main>
          }
        />

        <Route path="/mfe1" element={<Mfe1 />} />

        <Route path="/mfe2" element={<Mfe2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
