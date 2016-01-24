class Room {
  private _name: string;
  private _laboratory: Laboratory;

  constructor(name: string, laboratory: Laboratory) {
    this._laboratory = laboratory;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get laboratory(): Laboratory {
    return this._laboratory;
  }

  toString(): string {
    return this.name;
  }
}