import { Form } from '../interfaces/Form';
import { FormLevel } from '../interfaces/FormLevel';
import { Room } from '../interfaces/Room';
import { Subject } from '../interfaces/Subject';
import { Teacher } from '../interfaces/Teacher';

export class SchoolData {

  schoolName: string;
  forms: Array<Form>;
  formLevels: Array<FormLevel>;
  rooms: Array<Room>;
  subjects: Array<Subject>;
  teachers: Array<Teacher>;

  /**
   * The SchoolData is containing the steady data like the teachers, rooms, formlevels, subjects and forms
   * @param schoolName Name of this school
   */
  constructor(schoolName: string) {
    this.schoolName = schoolName;
  }

  /**
  * Adds a form to the schooldata
  * @param form Form which schould be added
  */
  addForm(form: Form): void {
    if (this.forms.indexOf(form) == -1) {
      this.forms.push(form);
    }
  }

  /**
   * Adds a teacher to the schooldata
   * @param formLevel FormLevel which should be added
   */
  addFormLevel(formLevel: FormLevel): void {
    if (this.formLevels.indexOf(formLevel) == -1) {
      this.formLevels.push(formLevel);
    }
  }

  /**
   * Adds a room to the schooldata
   * @param room Room which should be added
   */
  addRoom(room: Room): void {
    if (this.rooms.indexOf(room) == -1) {
      this.rooms.push(room);
    }
  }

  /**
   * Adds a subject to the schooldata
   * @param subject Subject which should be added
   */
  addSubject(subject: Subject): void {
    if (this.subjects.indexOf(subject) == -1) {
      this.subjects.push(subject);
    }
  }

  /**
   * Adds a teacher to the schooldata
   * @param teacher Teacher who should be added
   */
  addTeacher(teacher: Teacher): void {
    if (this.teachers.indexOf(teacher) == -1) {
      this.teachers.push(teacher);
    }
  }

  /**
   * Removes a form from the schooldata
   * @param form Form which should be removed
   */
  removeForm(form: Form): void {
    var index = this.forms.indexOf(form, 0);
    if (index != -1) {
      this.forms.splice(index, 1);
    }
  }

  /**
   * Removes a formlevel from the schooldata
   * @param formLevel FormLevel which should be removed
   */
  removeFormLevel(formLevel: FormLevel): void {
    var index = this.formLevels.indexOf(formLevel, 0);
    if (index != -1) {
      this.formLevels.splice(index, 1);
    }
  }

  /**
   * Removes a room from the schooldata
   * @param room Room which should be removed
   */
  removeRoom(room: Room): void {
    var index = this.rooms.indexOf(room, 0);
    if (index != -1) {
      this.rooms.splice(index, 1);
    }
  }

  /**
   * Removes a subject from the schooldata
   * @param subject Subject which should be removed
   */
  removeSubject(subject: Subject): void {
    var index = this.subjects.indexOf(subject, 0);
    if (index != -1) {
      this.subjects.splice(index, 1);
    }
  }

  /**
   * Removes a teacher from the schooldata
   * @param teacher Teacher who should be removed
   */
  removeTeacher(teacher: Teacher): void {
    var index = this.teachers.indexOf(teacher, 0);
    if (index != -1) {
      this.teachers.splice(index, 1);
    }
  }
}