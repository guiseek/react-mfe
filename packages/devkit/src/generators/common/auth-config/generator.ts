import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { CommonAuthConfigGeneratorSchema } from './schema';
import { join } from 'path';

type Key = keyof CommonAuthConfigGeneratorSchema;

function validateOptions(options: Partial<CommonAuthConfigGeneratorSchema>) {
  const keys: Key[] = ['projectRoot', 'url', 'port', 'user'];
  for (const key of keys) if (!options[key]) return `Missing ${key} value`;
}

function normalizeOptions(options: CommonAuthConfigGeneratorSchema) {
  const portIsString = typeof options.port === 'string';
  const port = portIsString ? +options.port : options.port;
  return { ...options, port };
}

export async function commonAuthConfigGenerator(
  tree: Tree,
  options: CommonAuthConfigGeneratorSchema
) {
  const message = validateOptions(options);
  if (message) throw new Error(message);

  const { projectRoot, ...values } = normalizeOptions(options);

  generateFiles(tree, join(__dirname, 'files'), projectRoot, values);

  if (!options.skipFormat) {
    await formatFiles(tree);
  }
}

export default commonAuthConfigGenerator;
