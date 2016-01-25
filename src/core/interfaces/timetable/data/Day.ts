﻿import {Weekday} from '../../../enums/timetable/Weekday';
import {Lesson} from './Lesson';

export class Day {
  
  weekday: Weekday;
  lessons: Array<Lesson>;

  /**
   * A Schoolday containing the actual weekday and all lessons at this day
   * @param weekday The weekday of this day
   * @param lessons All lessons held
   */
  constructor(weekday: Weekday, lessons: Array<Lesson>) {
    this.weekday = weekday;
    this.lessons = lessons;
  }
}