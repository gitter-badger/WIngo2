import fs = require('fs');
import { SchoolData } from '../objects/SchoolData';

export class SchoolDataSerializer {

  path: string;
  schoolData: SchoolData;

  constructor(path: string, schoolData: SchoolData) {
    this.path = path;
    this.schoolData = schoolData;

    this.saveData();
  }

  private saveData(): void {
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.formLevels));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.forms));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.teachers));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.rooms));
    fs.writeFileSync(this.path, JSON.stringify(this.schoolData.subjects));
  }
}