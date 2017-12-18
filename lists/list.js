class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  current() {
    return this.pos;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize -1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  moveTo(position) {
    this.pos = position;
  }

  getCurrent() {
    return this.dataStore[this.pos];
  }

  getList() {
    return this.dataStore;
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }
  
  appendLarger(item) {
    if (typeof item === 'number') {
      const sortedData = [...this.dataStore].sort();
      if (sortedData.every(el => el < item)) {
        this.append(item);
        return true;
      } else {
        return false;
      }
    }

    if (typeof item === 'string') {
      const sortedData = [...this.dataStore, item].sort();
      if (sortedData[sortedData.length - 1] === item) {
        this.append(item);
        return true;
      } else {
        return false;
      }
    }
  }

  appendSmaller(item) {
    if (typeof item === 'number') {
      const sortedData = [...this.dataStore].sort();
      if (sortedData.every(el => el > item)) {
        this.append(item);
        return true;
      } else {
        return false;
      }
    }

    if (typeof item === 'string') {
      const sortedData = [...this.dataStore, item].sort();
      if (sortedData[0] === item) {
        this.append(item);
        return true;
      } else {
        return false;
      }
    }
  }

  length() {
    return this.listSize;
  }

  display() {
    return this.dataStore.toString();
  }

  find(element) {
    return this.dataStore.indexOf(element);
  }

  search(params) {
    const keys = Object.keys(params);
    return this.dataStore.filter(el => {
      return keys.every(key => params[key] === el[key]);
    });
  }

  contains(element) {
    return this.find(element) > -1;
  }

  insert(element, after) {
    const index = this.find(after);
    if (index > -1) {
      this.dataStore.splice(index+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  remove(element) {
    const index = this.find(element);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  clear() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
  }

}

module.exports = List;
