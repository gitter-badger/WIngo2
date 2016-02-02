import { TeacherAbsence } from '../interfaces/absence/TeacherAbsence';
import { FormAbsence } from '../interfaces/absence/FormAbsence';
import { RoomAbsence } from '../interfaces/absence/RoomAbsence';
import { Substitution } from '../interfaces/Substitution';

export class Schoolday {

  date: Date;
  teacherAbsences: Array<TeacherAbsence>;
  formAbsences: Array<FormAbsence>;
  roomAbsences: Array<RoomAbsence>;
  substitutions: Array<Substitution>;

  /**
   * A day of school specified by a date contaning all absences and substitutions
   * @param date Date of the day of school
   */
  constructor(date: Date) {
    this.date = date;
  }

  /**
   * Adds an absence of a teacher to the schoolday
   * @param teacherAbsence Teacherabsence which schould be added
   */
  addTeacherAbsence(teacherAbsence: TeacherAbsence): void {
    if (this.teacherAbsences.indexOf(teacherAbsence) === -1) {
      this.teacherAbsences.push(teacherAbsence);
    }
  }

  /**
   * Adds an absence of a form to the schoolday
   * @param teacherAbsence Formabsence which schould be added
   */
  addFormAbsence(formAbsence: FormAbsence): void {
    if (this.formAbsences.indexOf(formAbsence) === -1) {
      this.formAbsences.push(formAbsence);
    }
  }

  /**
   * Adds an absence of a room to the schoolday
   * @param teacherAbsence Roomabsence which schould be added
   */
  addRoomAbsence(roomAbsence: RoomAbsence): void {
    if (this.roomAbsences.indexOf(roomAbsence) === -1) {
      this.roomAbsences.push(roomAbsence);
    }
  }

  /**
   * Adds a substitution to the schoolday
   * @param substitution Substitution which should be added
   */
  addSubstitution(substitution: Substitution): void {
    if (this.substitutions.indexOf(substitution) === -1) {
      this.substitutions.push(substitution);
    }
  }

  /**
   * Removes an absence of a teacher from the schoolday
   * @param lesson Teacherabsence which should be removed
   */
  removeTeacherAbsence(teacherAbsence: TeacherAbsence): void {
    var index = this.teacherAbsences.indexOf(teacherAbsence, 0);
    if (index !== -1) {
      this.teacherAbsences.splice(index, 1);
    }
  }

  /**
   * Removes an absence of a form from the schoolday
   * @param lesson Formabsence which should be removed
   */
  removeFormAbsence(formAbsence: FormAbsence): void {
    var index = this.formAbsences.indexOf(formAbsence, 0);
    if (index !== -1) {
      this.formAbsences.splice(index, 1);
    }
  }

  /**
   * Removes an absence of a room from the schoolday
   * @param lesson Roomabsence which should be removed
   */
  removeRoomAbsence(roomAbsence: RoomAbsence): void {
    var index = this.roomAbsences.indexOf(roomAbsence, 0);
    if (index !== -1) {
      this.roomAbsences.splice(index, 1);
    }
  }

  /**
   * Removes a substitution from the schoolday
   * @param substitution Substitution which should be removed
   */
  removeSubstitution(substitution: Substitution): void {
    var index = this.substitutions.indexOf(substitution, 0);
    if (index !== -1) {
      this.substitutions.splice(index, 1);
    }
  }
}