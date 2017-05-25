class Storage {
  constructor(options) {
    this.storage = options.storage || window.localStorage;
  }

  getItem(key) {
    return this.storage.getItem(key);
  }

  setItem(key, val) {
    return localStorage.setItem(key, val);
  }
}

export default Storage;
