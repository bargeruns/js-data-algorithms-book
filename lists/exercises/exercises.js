class List {
  constructor() {
    this.data = [];
    this.pos = 0;
    this.listSize = 0;
  }

  append(item) {
    this.data[this.listSize++] = item;
  }

  appendLarger(item) {
    if (typeof item === 'number') {
      const sortedData = [...this.data].sort();
      if (sortedData.every(el => el < item)) {
        this.append(item);
        return true;
      } else {
        return false;
      }
    }

    if (typeof item === 'string') {
      const sortedData = [...this.data, item].sort();
      if (sortedData[sortedData.length - 1] === item) {
        this.append(item);
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = List;
