class QuickFind {
  constructor(length) {
    this.integers = this.initializeIntegers(length);
  }

  find(intToFind) {
    let indices = [];
    for (let i = 0; i < this.integers.length; i++) {
      let int = this.integers[i];
      if (int === intToFind) {
        indices.push(i);
      }
    }
    return indices;
  }

  initializeIntegers(length) {
    let integers = [];
    for (let i = 0; i < length; i++) {
      integers.push(i);
    }

    return integers;
  }

  isConnected(idx1, idx2) {
    return this.integers[idx1] === this.integers[idx2];
  }

  union(target, newValue) {
    let indices = this.find(target);
    for (let i = 0; i < indices.length; i++) {
      this.integers[indices[i]] = newValue;
    }
  }
}
