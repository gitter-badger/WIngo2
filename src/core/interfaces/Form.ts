import {FormLevel} from "./FormLevel";
import {Room} from "./Room";
import {Teacher} from "./Teacher";

export class Form {

  name: string;
  size: number;
  level: FormLevel;
  room: Room;
  firstTeacher: Teacher;
  secondTeacher: Teacher;

  /**
   * A form of a school
   * @param name Form Name
   * @param size Size of the maximum students
   * @param level Mapped number of the current grade level
   * @param room Main room of the class
   * @param firstTeacher The First teacher of the class
   * @param secondTeacher The second teacher of class
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