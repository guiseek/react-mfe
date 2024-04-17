import { MessageForm } from './message-form';
import { Message } from './message';
// import styles from './app.module.scss';

export function App() {
  return (
    <div style={{ flex: 1 }}>
      <h2>MFE 2</h2>

      <hr />

      <Message />

      <MessageForm />
    </div>
  );
}

export default App;
