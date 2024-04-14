// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div style={styles}>
      <NxWelcome title="mfe1" />
    </div>
  );
}

export default App;
