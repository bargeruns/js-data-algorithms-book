const { List } = require('./list.js');

describe('list ADT', () => {
  it('should construct an empty list', () => {
    const list = new List();

    expect(list.listSize).toBe(0);
    expect(list.pos).toBe(0);
    expect(list.dataStore).toEqual([]);
  });

  it('should append an element to the list', () => {
    const list = new List();

    list.append('call bob');
    expect(list.listSize).toBe(1);
    expect(list.dataStore[0]).toBe('call bob');
  });

  it('should return the list size', () => {
    const list = new List();
    list.append('thing 1');
    list.append('thing 2');
    list.append('thing 3');

    expect(list.length()).toBe(3);
  });

  it('should remove an item from the list', () => {
    const list = new List();

    list.append('call joe');
    list.append('return your shoes');
    list.append('take candy from baby');
    
    expect(list.remove('take candy from baby')).toBe(true);
    expect(list.remove('buy fancy duvet cover')).toBe(false);
    expect(list.listSize).toBe(2);
  });

  it('should return a string representation of the list', () => {
    const list = new List();

    list.append('joe');
    list.append('bob');
    list.append('jim');

    expect(list.display()).toBe('joe,bob,jim');
  });

  it('should insert an element after the provided element', () => {
    const list = new List();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(5);

    expect(list.insert(4, 3)).toBe(true);
    expect(list.display()).toBe('1,2,3,4,5');
  });

  it('should clear all elements from a list', () => {
    const list = new List();
    list.append('go');
    list.append('away');
    list.append('please');

    list.clear();
    expect(list.length()).toBe(0);
    expect(list.current()).toBe(0);
  });

  it('should return bool if list contains a given element', () => {
    const list = new List();
    list.append('come find me');

    expect(list.contains('come find me')).toBe(true);
    expect(list.contains('I\'ll be waiting')).toBe(false);
  });

  it('should return current position in list', () => {
    const list = new List();
    ['my obsession', 'television romance', 'new year\'s eve', 'there\'s a honey'].forEach(song => list.append(song));

    expect(list.current()).toBe(0);
    list.moveTo(3);
    expect(list.current()).toBe(3);
  });

  it('should return element at current position', () => {
    const list = new List();
    ['my obsession', 'television romance', 'new year\'s eve', 'there\'s a honey'].forEach(song => list.append(song));
    
    list.moveTo(2); 
    expect(list.getCurrent()).toBe('new year\'s eve');
  });
});
