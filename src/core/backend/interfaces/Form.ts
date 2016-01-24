class Form {

  private _name: string;
  private _size: number;
  private _level: FormLevel;
  private _room: Room;
  private _firstTeacher: Teacher;
  private _secondTeacher: Teacher;

  constructor(name: string, size: number, level: FormLevel, room: Room, firstTeacher: Teacher, secondTeacher: Teacher) {
    this._name = name;
    this._size = size;
    this._level = level;
    this._room = room;
    this._firstTeacher = firstTeacher;
    this._secondTeacher = secondTeacher;
  }

  get name(): string {
    return this._name;
  }

  get size(): number {
    return this._size;
  }

  get level(): FormLevel {
    return this._level;
  }

  get room(): Room {
    return this._room;
  }

  get firstTeacher(): Teacher {
    return this._firstTeacher;
  }

  get secondTeacher(): Teacher {
    return this._secondTeacher;
  }

  toString(): string {
    return this.name;
  }
}