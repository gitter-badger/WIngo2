import {ScienceRoom} from "../enums/ScienceRoom";

export class Subject {

  name: string;
  shortcut: string;
  scienceRoom: ScienceRoom;
  mainSubject: boolean;

  constructor(name: string, shortcut: string, mainSubject: boolean, scienceRoom: ScienceRoom) {
    this.name = name;
    this.shortcut = shortcut;
    this.scienceRoom = scienceRoom;
    this.mainSubject = mainSubject;
  }
}