class Teacher {

  private _firstname: string;
  private _lastname: string;
  private _shortcut: string;
  private _hoursPerWeek: number;
  private _teacherLevels: Array<TeacherLevel>;
  private _subjects: Array<Subject>;

  constructor(firstname: string, lastname: string, shortcut: string, hoursPerWeek: number, teacherLevels: Array<TeacherLevel>) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._shortcut = shortcut;
    this._hoursPerWeek = hoursPerWeek;
    this._teacherLevels = teacherLevels;
  }

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get shortcut(): string {
    return this._shortcut;
  }

  get hoursPerWeek(): number {
    return this._hoursPerWeek;
  }

  get teacherLevels(): Array<TeacherLevel> {
    return this.teacherLevels;
  }
}