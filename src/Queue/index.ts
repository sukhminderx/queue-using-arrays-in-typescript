export class Queue {
  _values: Array<number> = [];

  enqueue(val: number) {
    this._values.push(val);
  }

  dequeue(): number {
    if (this.underflow()) {
      return NaN;
    } else {
      const front = this._values[0];
      this._values.shift();
      return front;
    }
  }
  underflow() {
    return !this._values.length;
  }
  front(): number {
    if (this.underflow()) {
      return NaN;
    } else {
      const front = this._values[0];
      return front;
    }
  }

  print() {
      console.log(this._values);
  }
}
