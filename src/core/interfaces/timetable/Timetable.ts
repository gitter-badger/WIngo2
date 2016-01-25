import {Day} from './data/Day';

export class Timetable {
  
  allDays: Array<Day>;

  /**
   * Adds a day to the timetable
   * @param day Day which should be added
   */
  addDay(day: Day): void {
    if (this.allDays.indexOf(day) == -1) {
      this.allDays.push(day);
    }
  }

  /**
   * Removes a day from the timetable
   * @param day Day which should be removed
   */
  removeDay(day: Day): void {
    var index = this.allDays.indexOf(day, 0);
    if (index != -1) {
      this.allDays.splice(index, 1);
    }
  }
}