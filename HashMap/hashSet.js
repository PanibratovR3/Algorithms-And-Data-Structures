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
    this.bucketSize++;
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
}
