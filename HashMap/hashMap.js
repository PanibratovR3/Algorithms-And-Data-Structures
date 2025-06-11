class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.bucketSize = 16;
    this.usedBuckets = 0;
    this.buckets = new Array(this.bucketSize).fill(null).map(() => []);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = hashCode * primeNumber + key.charCodeAt(i);
    }

    return hashCode % this.bucketSize;
  }

  checkLoadFactor() {
    if (this.usedBuckets / this.bucketSize > this.loadFactor) {
      const oldBuckets = this.buckets;
      this.bucketSize *= 2;
      this.buckets = new Array(this.bucketSize).fill(null).map(() => []);

      for (const bucket of oldBuckets) {
        for (const [key, value] of bucket) {
          const newIndex = this.hash(key);
          this.buckets[newIndex].push([key, value]);
        }
      }
    }
  }

  set(key, value) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];
    if (bucket.length > 0) {
      for (const item of bucket) {
        if (item[0] === key) {
          item[1] = value;
          return;
        }
      }
    }

    bucket.push([key, value]);
    this.usedBuckets++;
    this.checkLoadFactor();
  }

  get(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];
    if (bucket.length > 0) {
      for (const item of bucket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return null;
  }

  has(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];
    if (bucket.length > 0) {
      for (const item of bucket) {
        if (item[0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];
    if (bucket.length > 0) {
      let indexToDelete = bucket.findIndex((item) => item[0] === key);
      if (indexToDelete !== -1) {
        bucket.splice(indexToDelete, 1);
        if (bucket.length === 0) this.usedBuckets--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.buckets.reduce((total, item) => total + item.length, 0);
  }

  clear() {
    this.buckets = this.buckets.map((item) => (item.length = 0));
    this.usedBuckets = 0;
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      if (bucket.length > 0) {
        for (const item of bucket) {
          keysArray.push(item[0]);
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      if (bucket.length > 0) {
        for (const item of bucket) {
          valuesArray.push(item[1]);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      if (bucket.length > 0) {
        for (const item of bucket) {
          entriesArray.push(item);
        }
      }
    }
    return entriesArray;
  }
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.entries());
console.log(test.length());
test.set("hat", "white");
console.log(test.entries());
console.log(test.length());

test.set("moon", "silver");
console.log(test.buckets);
