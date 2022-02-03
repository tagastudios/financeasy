export default class LocalStorageHandler {
  constructor(applicationKey, version) {
    this.applicationKey = applicationKey;
    this.version = JSON.stringify(version);
    this.keys = {
      version: this.applicationKey + "-version",
      register: this.applicationKey + "-registeredKeys",
      tailorKey: (key) => `${this.applicationKey}-v${this.version}-${key}`,
    };

    const storedVersion = localStorage.getItem(this.keys.version);
    if (!storedVersion) {
      this._setStoreValue(this.keys.version, this.version);
      this._setStoreValue(this.register, []);
    } else if (storedVersion !== this.version) {
      this._clearLocalStorage(storedVersion);
      this._setStoreValue(this.keys.version, this.version);
    }
    this.registeredKeys = JSON.parse(localStorage.getItem(this.keys.register));
  }

  getStoreValue(key, defaultValue) {
    let value = localStorage.getItem(this.keys.tailorKey(key));
    if (!value) {
      this.setStoreValue(key, defaultValue);
      return defaultValue;
    } else {
      if (typeof defaultValue !== "string") {
        value = JSON.parse(value);
      }
    }
    return value;
  }

  get(...args) {
    return this.getStoreValue(...args);
  }

  setStoreValue(key, value) {
    key = this.keys.tailorKey(key);
    if (this.registeredKeys !== null && !this.registeredKeys.includes(key))
      this._addToRegisteredKeys(key);
    this._setStoreValue(key, value);
    return value;
  }

  set(...args) {
    return this.setStoreValue(...args);
  }

  _addToRegisteredKeys(key) {
    this.registeredKeys.push(key);
    this._setStoreValue(this.keys.register, this.registeredKeys);
  }

  _setStoreValue(key, value) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  _clearLocalStorage(_version = this.version) {
    JSON.parse(localStorage.getItem(this.keys.register)).forEach((key) => {
      localStorage.removeItem(key);
    });
    this._setStoreValue(this.keys.register, []);
  }
}
