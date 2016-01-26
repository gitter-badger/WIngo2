import {Lesson} from '../timetable/data/Lesson';
import {LessonTime} from '../../enums/timetable/LessonTime';

export class Absence {
  
  /**
   * List of lessons in which the teacher is absent
   */
  lessons: Array<Lesson>;

  /**
   * Adds a lesson to the absence
   * @param lesson Lesson which should be added
   */
  addLesson(lesson: Lesson): void {
    if (this.lessons.indexOf(lesson) == -1) {
      this.lessons.push(lesson);
    }
  }

  /**
   * Removes a lesson from the absence
   * @param lesson Lesson which should be removed
   */
  removeLesson(lesson: Lesson): void {
    var index = this.lessons.indexOf(lesson, 0);
    if (index != -1) {
      this.lessons.splice(index, 1);
    }
  }
}