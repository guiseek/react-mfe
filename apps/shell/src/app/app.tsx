import * as React from 'react';
import { Event, add, use } from '@react-mfe/common';
import { Link, Route, Routes } from 'react-router-dom';
import { loadRemoteModule } from '@nx/react/mf';

import { Home } from './home';

add(Event);

const Mfe1 = React.lazy(() => loadRemoteModule('mfe1', './Module'));

const Mfe2 = React.lazy(() => loadRemoteModule('mfe2', './Module'));

interface EventMap {
  hi: string;
  hello: string;
}

export function App() {
  const [message, setMessage] = React.useState<string>('empty');

  const event = use(Event<EventMap>);

  event.on('hi', setMessage);

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/mfe1">Mfe1</Link>
        </li>

        <li>
          <Link to="/mfe2">Mfe2</Link>
        </li>
      </ul>
      <p>{message}</p>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mfe1" element={<Mfe1 />} />

        <Route path="/mfe2" element={<Mfe2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
