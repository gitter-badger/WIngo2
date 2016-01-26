import {Room} from '../Room';
import {Timetable} from './Timetable';

export class RoomTimetable extends Timetable {
  
  /**
   * Room of the Timetable
   */
  room: Room;

  /**
   * A Timetable only for rooms
   * @param room Timetable's room
   */
  constructor(room: Room) {
    super();
    this.room = room;
  }
}