import type { FormEvent } from 'react';
import { parse } from './parse';

export const onSubmit = <T>(callback: (value: T) => void) => {
  return (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    callback(parse(ev.currentTarget));
  };
};
