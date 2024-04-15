import type { Callback } from './types';

export class Event<T> {
  #map = new Map();

  on<K extends keyof T>(key: K, callback: Callback<T[K]>) {
    this.#map.set(key, this.#listeners(key).add(callback));
    const off = () => this.off(key, callback);
    return { off };
  }

  off<K extends keyof T>(key: K, callback: Callback<T[K]>) {
    const listeners = this.#listeners(key);
    listeners.delete(callback);
    this.#map.set(key, listeners);
  }

  emit<K extends keyof T>(key: K, value: T[K]) {
    for (const cb of this.#listeners(key)) cb(value);
  }

  #listeners<K extends keyof T>(key: K): Set<Callback<T[K]>> {
    return this.#map.get(key) ?? new Set();
  }
}
