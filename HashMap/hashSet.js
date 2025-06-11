class HashSet {
  constructor() {
    this.bucketSize = 16;
    this.usedBuckets = 0;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.bucketSize).fill(null).map(() => []);
  }

  hash(key) {
    let hashValue = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashValue = hashValue * primeNumber + key.charCodeAt(i);
    }

    return hashValue % this.bucketSize;
  }

  checkLoadFactor() {
    if (this.usedBuckets / this.bucketSize > this.loadFactor) {
      const oldBucket = this.buckets;
      this.bucketSize *= 2;
      this.buckets = new Array(this.bucketSize).fill(null).map(() => []);
      for (const bucket of oldBucket) {
        for (const [key] of bucket) {
          let newIndex = this.hash(key);
          this.buckets[newIndex].push([key]);
        }
      }
    }
  }

  set(key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket.length > 0) {
      for (const item of bucket) {
        if (item[0] === key) {
          return;
        }
      }
    }

    bucket.push([key]);
    this.usedBuckets++;
    this.checkLoadFactor();
  }

  get(key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket.length > 0) {
      for (const item of bucket) {
        if (item[0] === key) {
          return item[0];
        }
      }
    }

    return null;
  }

  has(key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];
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
    let index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket.length > 0) {
      let indexToDelete = bucket.findIndex((item) => item[0] === key);
      if (indexToDelete !== -1) {
        bucket.splice(indexToDelete, 1);
        this.usedBuckets--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.buckets.reduce((total, bucket) => total + bucket.length, 0);
  }

  clear() {
    this.usedBuckets = 0;
    this.buckets.map((bucket) => (bucket.length = 0));
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
}

const test = new HashSet();
test.set("key 1");
test.set("key 1");
console.log(test.get("key 1"));
console.log(test.has("key 2"));
console.log(test.buckets);
