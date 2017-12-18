const { Student, WordList, MonthlyWeather, WordBuilder } = require('./arrays.js');

describe('array chapter tests', () => {
  describe('grade averages', () => {
    it('returns a new Student object', () => {
      const student = new Student('Sean');
      expect(student.name).toBe('Sean');
      expect(student.grades.length).toBe(0);
    }); 
  
    it('adds a single grade to a Student', () => {
      const student = new Student('Sean');
      student.addGrades(47);
      expect(student.grades.length).toBe(1);
      expect(student.grades[0]).toBe(47);
    });

    it('adds a series of grades to a Student', () => {
      const student = new Student('Sean');
      student.addGrades(45);
      student.addGrades([47, 54, 66, 49]);
      expect(student.grades.length).toBe(5);
      expect(student.grades).toEqual([45, 47, 54, 66, 49]);
    });

    it('returns the average of a student\'s grades', () => {
      const student = new Student('Sean');
      student.addGrades([45, 54, 55, 48, 72]);
      expect(student.averageGrades()).toBe(54.80);
    });
  });

  describe('arrays forwards and backwards', () => {
    const wordList = new WordList('dingus', 'repl', 'fancyboi', 'stockholm');
    it('should store an array of words', () => {
      expect(wordList.words.length).toBe(4);
    });

    it('should display list of words forwards', () => {
      expect(wordList.forward()).toEqual(['dingus', 'repl', 'fancyboi', 'stockholm']);
    });

    it('should display list of words in reverse order, without mutating the original array', () => {
      expect(wordList.reverse()).toEqual(['stockholm', 'fancyboi', 'repl', 'dingus']);
      expect(wordList.words).toEqual(['dingus', 'repl', 'fancyboi', 'stockholm']);
    });
  });

  describe('monthly and weekly temperature averages', () => {
    const month = new MonthlyWeather();

    it('should add a week of temperatures to the month', () => {
      month.addWeek([45, 48, 49, 43, 52, 55, 47]);
      month.addWeek([44, 42, 38, 34, 37, 35, 40]);
      month.addWeek([32, 34, 32, 35, 30, 27, 15]);
      month.addWeek([55, 58, 60, 61, 57, 43, 56]);

      expect(month.weeks.length).toBe(4);
    });

    it('should return the average of a given week', () => {
      expect(month.weeklyAverage(0)).toBe(48.43);
      expect(month.weeklyAverage(3)).toBe(55.71);
    });

    it('should return an array of all weekly averages', () => {
      expect(month.allWeeklyAverages()).toEqual([48.43, 38.57, 29.29, 55.71]);
    });

    it('should return average of all temperatures in the month', () => {
      expect(month.monthlyAverage()).toBe(43);
    });
  });

  describe('combining arrays of letters', () => {
    it('should store letters in an array', () => {
      const wordBuilder = new WordBuilder('s', 'e', 'a', 'n');
      expect(wordBuilder.letters.length).toBe(4);
    });

    it('should return array of letters joined into a string', () => {
      const wordBuilder = new WordBuilder('s', 'e', 'a', 'n');
      expect(wordBuilder.word()).toBe('sean');
    });
  });
});
