import { Tree, generateFiles, readProjectConfiguration } from '@nx/devkit';
import { hostGenerator } from '@nx/react';
import { Linter } from '@nx/eslint';
import { join } from 'node:path';
import { ReactHostGeneratorSchema } from './schema';

const generateRemoteFiles = (tree: Tree, name: string, shell: string) => {
  const { root } = readProjectConfiguration(tree, name);
  if (root) {
    const srcFolder = join(__dirname, 'files', 'remote');
    console.log(srcFolder);

    generateFiles(tree, srcFolder, root, { name, shell });
  }
};

const generateHostFiles = (tree: Tree, name: string) => {
  const { root } = readProjectConfiguration(tree, name);
  if (root) {
    const srcFolder = join(__dirname, 'files', 'host');
    console.log(srcFolder);

    generateFiles(tree, srcFolder, root, { name });
  }
};

export async function reactHostGenerator(
  tree: Tree,
  options: ReactHostGeneratorSchema
) {
  await hostGenerator(tree, {
    style: 'scss',
    minimal: true,
    dynamic: true,
    globalCss: true,
    directory: 'apps',
    e2eTestRunner: 'none',
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    projectNameAndRootFormat: 'derived',
    ...options,
  });

  generateHostFiles(tree, options.name);

  if (options.remotes) {
    for (const remote of options.remotes) {
      generateRemoteFiles(tree, remote, options.name);
    }
  }
}

export default reactHostGenerator;
