export class Token<T = unknown> {
  constructor(public name: string, readonly value?: T) {}
}

export function token<T>(name: string, value?: T): Token<T> {
  const ref = new Token<T>(name, value);
  set({ key: ref, use: value });
  return ref;
}

export interface Type<T = unknown> extends ReturnType<FunctionConstructor> {
  new (...args: unknown[]): T;
}

export type Factory<T> = (...args: unknown[]) => T | Promise<T>;

export type Abstract<T> = abstract new (...args: unknown[]) => T;

export type ProviderKey<T> = Abstract<T> | Token<T>;

export type ProviderImpl<T> = T | Type<T> | Factory<T>;

export interface Provider<T = unknown> {
  key: ProviderKey<T>;
  use?: ProviderImpl<T>;
  deps?: ProviderKey<T>[];
}

const container = new Map();
const relations = new Map();

const use = <T>(type: ProviderKey<T>): T => {
  const concrete = container.get(type);
  if (!concrete) {
    throw new Error(`Provider ${type.name} not registered`);
  }
  return concrete;
};

const is = {
  function<R>(value: unknown): value is (...args: unknown[]) => R {
    return typeof value === 'function';
  },
  class<T>(value: unknown): value is Type<T> {
    return this.function(value) && 'prototype' in value;
  },
};

const provide = async <T>({ key, use }: Provider<T>): Promise<T> => {
  const concrete = use ?? key;
  const deps = relations.get(key);

  if (is.function<T>(concrete)) {
    if (is.class<T>(concrete)) {
      return new concrete(...Array.of(deps));
    }

    return await concrete(...Array.of(deps));
  }

  return concrete as T;
};

const deps = <T>(provider: Provider<T>) => {
  return (provider.deps ?? []).map(use);
};

const add = async <T>(provider: Type<T> | Provider<T>): Promise<void> => {
  if ('key' in provider) {
    relations.set(provider.key, deps(provider));
    container.set(provider.key, await provide(provider));
  } else {
    relations.set(provider, []);
    container.set(provider, await provide({ key: provider }));
  }
};

const set = (...providers: Provider[]): void => {
  providers.forEach((provider) => add(provider));
};

export { add, set, use };
