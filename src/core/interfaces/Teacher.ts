import {TeacherLevel} from "../enums/TeacherLevel";
import {Subject} from "./Subject";

export class Teacher {

  firstname: string;
  lastname: string;
  shortcut: string;
  hoursPerWeek: number;
  teacherLevels: Array<TeacherLevel>;
  subjects: Array<Subject>;

  constructor(firstname: string, lastname: string, shortcut: string, hoursPerWeek: number, teacherLevels: Array<TeacherLevel>) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.shortcut = shortcut;
    this.hoursPerWeek = hoursPerWeek;
    this.teacherLevels = teacherLevels;
  }
}