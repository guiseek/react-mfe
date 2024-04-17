# React MFE

## Generators

### Run

```
nx g @react-mfe/devkit:react-host app-shell --remotes mfe3,mfe4
```

### Update

#### Shell

File: `apps/app-shell/src/app/app.tsx`
```diff tsx
+ import { add, Event } from '@react-mfe/common';
+ import { Message } from './message';

+ add(Event);

...
          <Link to="/mfe4">Mfe4</Link>
        </li>
      </ul>

+      <Message />

      <Routes>
```

#### Remotes

File: `apps/[mfe3|mfe4]/src/app/app.tsx`
```diff tsx
- import { NxWelcome } from './nx-welcome';
+ import { MessageForm } from './message-form';
+ import { Message } from './message';

export function App() {
  return (
    <div style={{ flex: 1 }}>
      <h2>MFE 1</h2>

-      <NxWelcome />
+      <Message />
+      <MessageForm />
    </div>
  );
}
```
