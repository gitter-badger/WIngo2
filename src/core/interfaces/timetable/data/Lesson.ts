import {LessonTime} from '../../../enums/timetable/LessonTime';
import {Subject} from '../../Subject';
import {Teacher} from '../../Teacher';
import {Form} from '../../Form';
import {Room} from '../../Room';

export class Lesson {
  
  lessonTime: LessonTime;
  subject: Subject;
  teacher: Teacher;
  form: Form;
  room: Room;

  /**
   * A lesson containing the time and form, subject, room and teacher data.
   * @param lessonTime Time when this lesson is
   * @param subject Subject which is teached
   * @param teacher Teacher who teaches
   * @param form Form who is teached
   * @param room Room that is used
   */
  constructor(lessonTime: LessonTime, subject: Subject, teacher: Teacher, form: Form, room: Room) {
    this.lessonTime = lessonTime;
    this.subject = subject;
    this.form = form;
    this.room = room;
  }
}