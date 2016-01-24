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

  constructor(name: string, size: number, level: FormLevel, room: Room, firstTeacher: Teacher, secondTeacher: Teacher) {
    this.name = name;
    this.size = size;
    this.level = level;
    this.room = room;
    this.firstTeacher = firstTeacher;
    this.secondTeacher = secondTeacher;
  }
}