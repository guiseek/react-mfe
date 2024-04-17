import { MessageForm } from './message-form';
import { Message } from './message';

export function App() {
  return (
    <div style={{ flex: 1 }}>
      <h2>MFE 1</h2>

      <hr />

      <Message />

      <MessageForm />
    </div>
  );
}

export default App;
