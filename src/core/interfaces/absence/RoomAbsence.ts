import {Room} from '../Room';
import {Absence} from './Absence';

export class RoomAbsence extends Absence {

  /**
   * Room which is absent
   */
  room: Room;

  /**
   * An Absence only for rooms if they're unavailable.
   * @param room Timetable's room
   */
  constructor(room: Room) {
    super();
    this.room = room;
  }
}