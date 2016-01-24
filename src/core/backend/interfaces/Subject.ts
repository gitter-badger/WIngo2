class Subject {

  private _name: string;
  private _shortcut: string;
  private _laboratory: Laboratory;
  private _mainSubject: boolean;

  constructor(name: string, shortcut: string, laboratory: Laboratory, mainSubject: boolean) {
    this._name = name;
    this._shortcut = shortcut;
    this._laboratory = laboratory;
    this._mainSubject = mainSubject;
  }

  get name(): string {
    return this._name;
  }

  get shortcut(): string {
    return this._shortcut;
  }

  get laboratory(): Laboratory {
    return this._laboratory;
  }

  get mainSubject(): boolean {
    return this._mainSubject;
  }

  toString(): string {
    return this.name;
  }
}