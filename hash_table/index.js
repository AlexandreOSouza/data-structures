class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }

  get(key) {
    let hash = this._hash(key);
    const currentBucket = this.data[hash];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const currBucket = this.data[i];
      for (let j = 0; j < currBucket.length; j++) {
        keys.push(currBucket[j][0]);
      }
    }
    return keys;
  }
}
const myHash = new HashTable(2);

myHash.set("alexandre", "test");
myHash.set("marcus", "marcus name");
myHash.set("oliver", "oliver surname");

const alexandre = myHash.get("oliver");

// Given an array should return the first repeated number
const array = [2, 3, 4, 5];

let result = new Map();

function getFirst() {
  for (let i = 0; i < array.length; i++) {
    if (result.has(array[i])) {
      return array[i];
    } else {
      result.set(array[i], i);
    }
  }
}

console.log(getFirst());
