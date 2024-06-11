import { makeAutoObservable } from "mobx";

export default class CounterStore {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  get isOdd(): boolean {
    return this.value % 2 !== 0;
  }

  get isEven(): boolean {
    return this.value % 2 === 0;
  }
}
