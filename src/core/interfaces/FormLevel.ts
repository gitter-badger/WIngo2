import {Pair} from "../util/Pair";
import {Subject} from "./Subject";

export class FormLevel {

  level: number;
  subjects: Array<Pair<Subject, number>>;

  /**
   * A grade level containing the weekly school subjects and hours
   * @param level Form Level
   */
  constructor(level: number) {
    this.level = level;
    this.subjects = new Array<Pair<Subject, number>>();
  }

  /**
   * Adds a weekly subject with their amount of hours per week
   * @param subject Weekly subject of this form level
   * @param amount Weekly amount of this subject
   */
  addSubject(subject: Subject, amount: number): void {
    var pair: Pair<Subject, number> = new Pair<Subject, number>(subject, amount);
    if (this.subjects.indexOf(pair) > -1) {
      this.subjects.push(pair);
    }
  }

  /**
   * Removes a weekly subject with their amount of hours per week
   * @param pair The pair of the subject which should be removed from this form level
   */
  removeSubject(subject: Subject): void {
    for (var pair in this.subjects) {
      if (pair.first !== subject) {
        continue;
      }
      var index: number = this.subjects.indexOf(pair, 0);
      if (index != undefined) {
        this.subjects.splice(index, 1);
        return;
      }
    }
  }
}