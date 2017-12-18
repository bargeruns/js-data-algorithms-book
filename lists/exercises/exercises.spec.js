const List = require('../list.js');
const Person = require('../person.js');

describe('Chapter 3: list exercises', () => {
  describe('exercises 1 & 2', () => {
    it('should only insert element if it comes alphabetically after all other items in the list', () => {
      const words = new List();
      ['a', 'an', 'and', 'bus', 'dandy'].forEach(word => words.append(word));
      expect(words.appendLarger('zoom')).toBe(true);
      expect(words.contains('zoom')).toBe(true);
      expect(words.appendLarger('car')).toBe(false);
      expect(words.contains('car')).toBe(false);
    });

    it('should only insert new number element if it is larger than all other number elements in list', () => {
      const numbers = new List();
      [1, 2, 3, 4].forEach(num => numbers.append(num));

      expect(numbers.appendLarger(5)).toBe(true);
      expect(numbers.appendLarger(0)).toBe(false);
    });

    it('should only insert new element if it comes alphabetically _before_ all other items in the list', () => {
      const words = new List();
      ['hey', 'you', 'out', 'there', 'in', 'the', 'cold'].forEach(word => words.append(word));

      expect(words.appendSmaller('a')).toBe(true);
      expect(words.appendSmaller('getting')).toBe(false);
    });

    it('should only insert new numeric element if it is smaller than all other numbers in list', () => {
      const numbers = new List();
      [2, 3, 4, 5, 6].forEach(num => numbers.append(num));

      expect(numbers.appendSmaller(1)).toBe(true);
      expect(numbers.appendSmaller(9)).toBe(false);
    });
  });

  describe('exercise 3', () => {
    it('should create a new instance of the Person class', () => {
      const person = new Person('sean', 'male');
      expect(person.name).toBe('sean');
      expect(person.gender).toBe('male');
    });

    it('should display all people of the same gender', () => {
      const people = new List();
      [{name: 'regina', gender: 'female'}, 
        {name: 'sean', gender: 'male'}, 
        {name: 'jane', gender: 'female'}, 
        {name: 'tim', gender: 'male'}, 
        {name: 'charla', gender: 'female'}]
        .forEach(peep => people.append(peep));

      expect(people.search({ gender: 'female' }).length).toBe(3);
      expect(people.search({ gender: 'male' }).length).toBe(2);
    });
  });
});
