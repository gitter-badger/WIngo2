class Room {

  name: string;
  laboratory: Laboratory;

  constructor(name: string, laboratory: Laboratory) {
    this.laboratory = laboratory;
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}