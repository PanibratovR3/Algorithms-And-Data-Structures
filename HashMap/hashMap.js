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
    console.log(bucket);
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
}

const test = new HashMap();
test.set("apple", "red");
console.log(test.buckets);
