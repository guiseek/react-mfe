export interface Callback<T> {
  (value: T): void;
}

export interface EventMessage {
  to: string;
  from: string;
  data: string;
}

export interface EventMap {
  message: EventMessage;
}
