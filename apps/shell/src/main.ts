import { setRemoteDefinitions } from '@nx/react/mf';
import { env } from './environments/environment';

fetch(env.manifest)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
