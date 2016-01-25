import {TeacherLevel} from "../enums/TeacherLevel";
import {Subject} from "./Subject";

export class Teacher {

  /**
   * First name of the teacher
   */
  firstname: string;

  /**
   * Last name of the teacher
   */
  lastname: string;

  /**
   * Shortcut of the teacher
   */
  shortcut: string;

  /**
   * Hours per week, the teacher will work in school
   */
  hoursPerWeek: number;

  /**
   * Grade types on which the teacher is learned for
   */
  teacherLevels: Array<TeacherLevel>;

  //TODO(lordnoname): handle subjects in here
  /**
   * Subjects of the teacher, where he is able to work
   */
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