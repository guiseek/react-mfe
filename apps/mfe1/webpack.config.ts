import { withModuleFederation } from '@nx/react/module-federation';
import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
