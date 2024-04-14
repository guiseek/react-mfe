import { ModuleFederationConfig } from '@nx/webpack';

const isCommon = (libraryName: string) => {
  const commonEntryPoints = ['@react-mfe/common', '@react-mfe/common/di', '@react-mfe/common/event'];
  return commonEntryPoints.includes(libraryName);
};

const config: ModuleFederationConfig = {
  name: 'mfe1',

  library: { type: 'var', name: 'mfe1' },

  shared: (libraryName: string) => {
    console.log(libraryName);
    
    if (isCommon(libraryName)) {
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
