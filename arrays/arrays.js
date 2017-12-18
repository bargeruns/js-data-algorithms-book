class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrades(grades) {
    if (Array.isArray(grades)) {
      this.grades = this.grades.concat(grades);
      return;
    }
    this.grades.push(grades);
  }

  averageGrades() {
    return Number((this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length).toFixed(2));
  }
}

class WordList {
  constructor(...args) {
    this.words = [...args];
  }

  forward() {
    return this.words;
  }

  reverse() {
    return [].concat(this.words).reverse();
  }
}

class MonthlyWeather {
  constructor() {
    this.weeks = [];
  }

  addWeek(array) {
    this.weeks.push(array);
  }

  average(array) {
    return Number((array.reduce((sum, temp) => sum + temp, 0) / array.length).toFixed(2));
  }

  weeklyAverage(week) {
    return this.average(this.weeks[week]);
  }

  allWeeklyAverages() {
    return this.weeks.map((week) => this.average(week));
  }

  monthlyAverage() {
    return this.average(this.weeks.reduce((month, week) => month.concat(week), []));
  }
  
}

class WordBuilder {
  constructor(...args) {
    this.letters = [...args];
  }

  word() {
    return this.letters.join('');
  }
}



module.exports = {
  Student,
  WordList,
  MonthlyWeather,
  WordBuilder,
}
