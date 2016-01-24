import {ScienceRoom} from "../enums/ScienceRoom";

export class Room {

  name: string;
  scienceRoom: ScienceRoom;

  constructor(name: string, scienceRoom: ScienceRoom) {
    this.name = name;
    this.scienceRoom = scienceRoom;
  }
}