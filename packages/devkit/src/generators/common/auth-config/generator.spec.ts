import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { commonAuthConfigGenerator } from './generator';
import { CommonAuthConfigGeneratorSchema } from './schema';

describe('common-auth-config generator', () => {
  let tree: Tree;
  const options: CommonAuthConfigGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await commonAuthConfigGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
