import {RoomType} from "../enums/RoomType";

export class Room {

  /**
   * Name of the room
   */
  name: string;

  /**
   * Type of the room
   */
  roomType: RoomType;

  /**
   * Room of a school
   * @param name Name of the room
   * @param roomType Room Type
   */
  constructor(name: string, roomType: RoomType) {
    this.name = name;
    this.roomType = roomType;
  }
}