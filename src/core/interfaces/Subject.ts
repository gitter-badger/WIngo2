class Subject {

  name: string;
  shortcut: string;
  laboratory: Laboratory;
  mainSubject: boolean;

  constructor(name: string, shortcut: string, laboratory: Laboratory, mainSubject: boolean) {
    this.name = name;
    this.shortcut = shortcut;
    this.laboratory = laboratory;
    this.mainSubject = mainSubject;
  }

  toString(): string {
    return this.name;
  }
}