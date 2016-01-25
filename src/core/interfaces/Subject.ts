import {RoomType} from "../enums/RoomType";

/**
 * @private
 * A subject, including the name of the subject, the shortcut, the relevance of a ScienceRoom and the condition
 */
export class Subject {

  /**
   * Name of the Subject
   */
  name: string;

  /**
   * Shortcut of the Subject
   */
  shortcut: string;

  /**
   * Room Type for the Subject
   */
  roomType: RoomType;

  /**
   * Condition of being a main subject
   */
  mainSubject: boolean;

  /**
   * A subject of a school
   * @param name Name of the subject
   * @param shortcut Shortcut of the subject
   * @param mainSubject Condition of being a main subject
   * @param roomType Needed room type for the subject
   */
  constructor(name: string, shortcut: string, mainSubject: boolean, roomType: RoomType) {
    this.name = name;
    this.shortcut = shortcut;
    this.roomType = roomType;
    this.mainSubject = mainSubject;
  }
}