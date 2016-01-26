import {Teacher} from '../Teacher';
import {Timetable} from './Timetable';

export class TeacherTimetable extends Timetable {

  /**
   * Teacher of the timetable
   */
  teacher: Teacher;

  /**
   * A Timetable only for teachers
   * @param teacher Timetable's teacher
   */
  constructor(teacher: Teacher) {
    super();
    this.teacher = teacher;
  }
}