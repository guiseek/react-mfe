import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe1',

  library: { type: 'var', name: 'mfe1' },

  shared: (libraryName: string) => {
    if (libraryName.startsWith('@react-mfe/common')) {
      return {
        requiredVersion: '0.0.1',
        singleton: true,
        eager: true,
      };
    }
  },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
