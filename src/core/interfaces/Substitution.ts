import {LessonTime} from '../enums/timetable/LessonTime';
import {Form} from './Form';
import {Teacher} from './Teacher';
import {Room} from './Room';
import {SubstitutionType} from '../enums/SubstitutionType';

export class Substitution {
  
  lessonTime: LessonTime;
  form: Form;
  oldTeacher: Teacher;
  oldRoom: Room;
  newTeacher: Teacher;
  newRoom: Room;
  type: SubstitutionType;
  date: Date;

  /**
   * The Substitution identifies the substitute of the absent teacher
   * @param date Date when the substitution takes place
   * @param time Time in which lesson it happenes
   * @param form Form which is affected
   * @param oldTeacher Teacher who is absent
   * @param oldRoom Room where the lesson is reguraly
   */
  constructor(date: Date, lessonTime: LessonTime, form: Form, oldTeacher: Teacher, oldRoom: Room) {
    this.lessonTime = lessonTime;
    this.form = form;
    this.oldTeacher = oldTeacher;
    this.oldRoom = oldRoom;
    this.date = date;
  }
}