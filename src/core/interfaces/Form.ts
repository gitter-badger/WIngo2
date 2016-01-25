import {FormLevel} from "./FormLevel";
import {Room} from "./Room";
import {Teacher} from "./Teacher";

export class Form {

  /**
   * Name of the form
   */
  name: string;

  /**
   * Size of the form
   */
  size: number;

  /**
   * Level of the form and their containing subjects
   */
  level: FormLevel;

  /**
   * Main room of the form
   */
  room: Room;

  /**
   * The first teacher of the form
   */
  firstTeacher: Teacher;

  /**
   * The second teacher of the form
   */
  secondTeacher: Teacher;

  /**
   * A form of a school
   * @param name Form Name
   * @param size Size of the maximum students
   * @param level Mapped number of the current grade level
   * @param room Main room of the form
   * @param firstTeacher The First teacher of the form
   * @param secondTeacher The second teacher of the form
   */
  constructor(name: string, size: number, level: FormLevel, room: Room, firstTeacher: Teacher, secondTeacher: Teacher) {
    this.name = name;
    this.size = size;
    this.level = level;
    this.room = room;
    this.firstTeacher = firstTeacher;
    this.secondTeacher = secondTeacher;
  }
}