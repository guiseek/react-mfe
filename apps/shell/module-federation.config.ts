import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */

  shared: (libraryName: string) => {
    if (libraryName.startsWith('@react-mfe/common')) {
      return {
        requiredVersion: '0.0.1',
        singleton: true,
        eager: true,
      };
    }
  },

  remotes: [],
};

export default config;
