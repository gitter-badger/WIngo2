class FormLevel {

  private _level: number;
  //TODO: add subject and weekly amount of this subject in a array

  constructor(level: number) {
    this._level = level;
  }

  get level(): number {
    return this._level;
  }

  toString(): string {
    return this.level + '';
  }
}