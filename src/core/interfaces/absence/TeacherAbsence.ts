import {Teacher} from '../Teacher';
import {Absence} from './Absence';

export class TeacherAbsence extends Absence {

  /**
   * Teacher which is absent
   */
  teacher: Teacher;

  /**
   * An Absence only for teachers if they're unavailable
   * @param teacher Timetable's teacher
   */
  constructor(teacher: Teacher) {
    super();
    this.teacher = teacher;
  }
}