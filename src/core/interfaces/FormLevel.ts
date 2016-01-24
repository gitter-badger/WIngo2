export class FormLevel {

  level: number;
  //TODO(lordnoname): add subject and weekly amount of this subject in a array

  /**
   * A grade level containing the weekly school subjects and hours
   * @param level Form Level
   */
  constructor(level: number) {
    this.level = level;
  }
}