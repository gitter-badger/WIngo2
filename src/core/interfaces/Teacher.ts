import {TeacherLevel} from "../enums/TeacherLevel";
import {Subject} from "./Subject";

export class Teacher {

  firstname: string;
  lastname: string;
  shortcut: string;
  hoursPerWeek: number;
  teacherLevels: Array<TeacherLevel>;
  subjects: Array<Subject>;

  /**
   * A teacher of the school
   * @param firstname First name of the teacher
   * @param lastname Lastname of the teacher
   * @param shortcut Shortcut of the teacher
   * @param hoursPerWeek Amount of hours the teacher will work a week
   * @param teacherLevels Grade Types, the teacher is able to work
   */
  constructor(firstname: string, lastname: string, shortcut: string, hoursPerWeek: number, teacherLevels: Array<TeacherLevel>) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.shortcut = shortcut;
    this.hoursPerWeek = hoursPerWeek;
    this.teacherLevels = teacherLevels;
  }
}